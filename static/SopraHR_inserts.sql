
Insert into `soprahr-dev`.`user_role` (`id`, `description`)
values ('1', 'super admin');

Insert into `soprahr-dev`.`user_role` (`id`, `description`)
values ('2', 'admin');

Insert into `soprahr-dev`.`user` (`id`, `username`, `password`, `role_id`, `created_at`, `updated_at`, `created_by_id`, `updated_by_id`)
values ('1', 'tiagoMD', '7e07ec8fca5c2f79224def2202367201', '1',  '2011-01-01', '2011-01-01', '1', '1');

Insert into `soprahr-dev`.`user` (`id`, `username`, `password`, `role_id`, `created_at`, `updated_at`, `created_by_id`, `updated_by_id`)
values ('2', 'joseMD', '7e07ec8fca5c2f79224def2202367201', '2',  '2011-01-01', '2011-01-01', '1', '1');

Insert into `soprahr-dev`.`tp_document` (`id`, `description`)
values ('1', 'dni');

INSERT INTO `soprahr-dev`.`worker` (`id`, `name`, `surname`, `birthday_at`, `email`, `document_number`, `startup_at`, `salary`, `created_at`, `updated_at`, `user_id`, `document_type_id`, `created_by_id`, `updated_by_id`) 
VALUES ('1', 'tiago', 'deus', '1983-12-12', 'tiago@sopra.com', 's33234', '2011-01-01', '60000', '2011-01-01', '2011-01-01', '1', '1', '1', '1');

INSERT INTO `soprahr-dev`.`worker` (`id`, `name`, `surname`, `birthday_at`, `email`, `document_number`, `startup_at`, `salary`, `created_at`, `updated_at`, `user_id`, `document_type_id`, `created_by_id`, `updated_by_id`) 
VALUES ('2', 'jose', 'diago', '1982-12-12', 'jose@sopra.com', 's332367', '2011-01-01', '60000', '2011-01-01', '2011-01-01', '2', '1', '1', '1');

Insert into `soprahr-dev`.`tp_career_branch` (`id`, `description`)
values ('1', 'Tecnico');

Insert into `soprahr-dev`.`tp_company_level` (`id`, `description`)
values ('1', 'AP');

Insert into `soprahr-dev`.`tp_company_level` (`id`, `description`)
values ('2', 'Jefe');

Insert into `soprahr-dev`.`career` (`id`, `starting_at`, `observation`, `company_level_id`, `career_branch_id`, `worker_id`)
values ('1', '2011-01-01', 'observation', '1', '1', '1');

Insert into `soprahr-dev`.`tp_language` (`id`, `description`)
values ('1', 'English');

Insert into `soprahr-dev`.`language_level` (`id`, `language_id`, `worker_id`, `spoken_level`, `written_level`, `understanding_level`, `certification`)
values ('1', '1', '1', '10', '10', '10', 'C3');

Insert into `soprahr-dev`.`tp_degree` (`id`, `description`)
values ('1', 'Superior');

Insert into `soprahr-dev`.`study` (`id`, `worker_id`, `course`, `institution`, `grade`, `degree_id`, `starting_at`, `ending_at`, `country`, `observation`)
values ('1', '1', 'Informatica', 'complutence', '7.3', '1', '2007-09-10', '2011-09-10', 'España', 'observation');

Insert into `soprahr-dev`.`worker_availability` (`id`, `worker_id`, `starting_at`, `ending_at`, `motive`, `visible_agency`, `visible_department`, `visible_company`)
values ('1', '1', '2013-01-01', '2013-02-01', 'Project ending', '1', '1', '1');

Insert into `soprahr-dev`.`tp_functional_area_category` (`id`, `description`)
values ('1', 'Banking');

Insert into `soprahr-dev`.`tp_functional_area_subcategory` (`id`, `description`, `category_id`)
values ('1', 'Mortgages', '1');

Insert into `soprahr-dev`.`tp_functional_area_subcategory` (`id`, `description`, `category_id`)
values ('2', 'Loans', '1');

Insert into `soprahr-dev`.`functional_area` (`id`, `description`, `level`, `experience_years`, `created_at`, `updated_at`, `subcategory_id`, `worker_id`, `created_by_id`, `updated_by_id`)
values ('1', 'Mortgage signup and cashing', '10', '6', '2015-02-01', '2015-02-01', '1', '1', '1', '1');

Insert into `soprahr-dev`.`functional_area` (`id`, `description`, `level`, `experience_years`, `created_at`, `updated_at`, `subcategory_id`, `worker_id`, `created_by_id`, `updated_by_id`)
values ('2', 'Loan signup and cashing', '8', '6', '2014-02-01', '2014-02-01', '2', '1', '1', '1');

Insert into `soprahr-dev`.`functional_area` (`id`, `description`, `level`, `experience_years`, `created_at`, `updated_at`, `subcategory_id`, `worker_id`, `created_by_id`, `updated_by_id`)
values ('3', 'Loan signup and cashing', '10', '6', '2015-02-01', '2015-02-01', '2', '1', '1', '1');

Insert into `soprahr-dev`.`functional_area` (`id`, `description`, `level`, `experience_years`, `created_at`, `updated_at`, `subcategory_id`, `worker_id`, `created_by_id`, `updated_by_id`)
values ('4', 'Mortgage signup and cashing', '9', '6', '2015-02-01', '2015-02-01', '1', '2', '1', '1');

Insert into `soprahr-dev`.`tp_technology_category` (`id`, `description`)
values ('1', 'Java');

Insert into `soprahr-dev`.`tp_technology_subcategory` (`id`, `description`, `category_id`)
values ('1', 'Spring MVC', '1');

Insert into `soprahr-dev`.`technology` (`id`, `description`, `level`, `experience_years`, `created_at`, `updated_at`, `subcategory_id`, `worker_id`, `created_by_id`, `updated_by_id`)
values ('1', 'Api REST Architecture and development', '10', '1', '2015-02-01', '2015-02-01', '1', '1', '1', '1');

Insert into `soprahr-dev`.`tp_client` (`id`, `description`)
values ('1', 'ING Direct');

Insert into `soprahr-dev`.`experience` (`id`, `starting_at`, `ending_at`, `client_id`)
values ('1', '2011-01-01', '2015-08-01', '1');

Insert into `soprahr-dev`.`experience_functional_area` (`experience_id`, `functional_area_id`)
values ('1', '1');

Insert into `soprahr-dev`.`experience_functional_area` (`experience_id`, `functional_area_id`)
values ('1', '2');

Insert into `soprahr-dev`.`experience_functional_area` (`experience_id`, `functional_area_id`)
values ('1', '3');

Insert into `soprahr-dev`.`experience_functional_area` (`experience_id`, `functional_area_id`)
values ('1', '4');

Insert into `soprahr-dev`.`experience_technology` (`experience_id`, `technology_id`)
values ('1', '1');







