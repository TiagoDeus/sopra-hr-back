SELECT `Worker`.`id`, 
`Worker`.`name`, 
`Worker`.`surname`, 
`Worker`.`birthday`, 
`Worker`.`email`, 
`Worker`.`document_number`, 
`Worker`.`startup_date`, 
`Worker`.`salary`, 
`Worker`.`created_at`, 
`Worker`.`updated_at`, 
`Worker`.`deleted_at`, 
`Worker`.`document_type_id`, 
`document_type`.`id` AS `document_type.id`, 
`document_type`.`description` AS `document_type.description`, 
`career`.`id` AS `career.id`, 
`career`.`starting_date` AS `career.starting_date`, 
`career`.`observation` AS `career.observation`, 
`career`.`company_level_id` AS `career.company_level_id`, 
`career`.`career_branch_id` AS `career.career_branch_id`, 
`career`.`worker_id` AS `career.worker_id` 
FROM `worker` AS `Worker` 
LEFT OUTER JOIN `tp_document` AS `document_type` ON `Worker`.`document_type_id` = `document_type`.`id` 
LEFT OUTER JOIN `career` ON `Worker`.`id` = `career`.`worker_id` 
WHERE `Worker`.`deleted_at` IS NULL;

SELECT 
    fa1.id
FROM
    functional_area fa1
        INNER JOIN
    (SELECT 
        MAX(id) AS id, MAX(created_at) AS maxdate
    FROM
        functional_area 
	WHERE worker_id = 1
    GROUP BY subcategory_id) fa2 ON fa1.id = fa2.id
        AND fa1.created_at = fa2.maxdate;