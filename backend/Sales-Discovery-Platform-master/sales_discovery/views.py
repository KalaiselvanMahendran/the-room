from django.views.generic import View
from django.http import JsonResponse
from django.contrib.auth import logout
from django.shortcuts import redirect
from django.urls import reverse
from django.conf import settings

def home(request):
	username = 'Anonymous user'
	logged_in = False
	if request.user.is_authenticated:
		username = request.user.username
		logged_in = True
	return JsonResponse({'greeting':'Welcome ' + username,
						'logged_in' : logged_in})

def redirect_to_frontend(request):
	return redirect(settings.REDIRECT_TO_FRONTEND_URL)

class LogoutView(View):
	"""
	The logout view class. This will log the user out and invalidate the session.
	"""

	def get(self, *args, **kwargs):
		logout(self.request)
		return JsonResponse({'logged_in': False,
							'message':'successfully logged out'}, **kwargs)


class LoginView(View):
	"""
	The logout view class. This will log the user out and invalidate the session.
	"""

	def get(self, *args, **kwargs):
		if self.request.user.is_authenticated:
			return redirect(reverse("home"))
		return redirect(reverse("social:begin", args=["google-oauth2"]))