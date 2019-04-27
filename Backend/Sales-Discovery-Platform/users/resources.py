from import_export import resources
from .models import TemporaryUserProfile

class TemporaryUserProfileResource(resources.ModelResource):
	class Meta:
		model = TemporaryUserProfile
		fields = ('id','first_name','last_name','email')

	def __init__(self,user):
		self.user = user
		print(user)

	def init_instance(self, data, *args, **kwargs):
		instance = super(TemporaryUserProfileResource, self).init_instance(*args, **kwargs)
		instance.added_by = self.user
		instance.company = self.user.userprofile.company
		return instance

	# def before_import(self, dataset, using_transactions, dry_run, **kwargs):
	# 	dataset.insert_col(dataset.width, col=["", ] * dataset.height, header="id")
	#
