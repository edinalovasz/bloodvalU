# Generated by Django 3.0.3 on 2020-07-17 07:07

import apps.registrations.models
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('offeredtests', '0001_initial'),
        ('donorprofiles', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TestResult',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('result_code', models.CharField(default=apps.registrations.models.code_generator, max_length=5)),
                ('results', models.FileField(blank=True, null=True, upload_to='', validators=[django.core.validators.FileExtensionValidator(['pdf'])])),
                ('donor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='test_results', to='donorprofiles.DonorProfile')),
                ('type_of_test', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='test_results', to='offeredtests.OfferedTest')),
            ],
        ),
    ]
