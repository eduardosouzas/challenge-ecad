INSERT INTO user_ecad (name, login, password, created_at, updated_at, version)
VALUES ('Eduardo', 'eduardomail@gmail.com', '123456', now(), now(), 0);
INSERT INTO system_user_ecad (name, login, password, created_at, updated_at, version)
VALUES ('Eduardo', 'eduardomail@gmail.com', '123456', now(), now(), 0);

INSERT INTO levy_title
(user_id,competence_at,levy_value,installment_qt,system_user_id,cancel_justify,cancel_at,created_at,updated_at,version,level)
VALUES (1, now(), 4236.36,6,1, 'fldaskjfdl;asjf;ld',now(), now(), now(), 0, 1);

INSERT INTO levy_title
(user_id,competence_at,levy_value,installment_qt,system_user_id,cancel_justify,cancel_at,created_at,updated_at,version,level)
VALUES (1, now(), 236.36,6,1, 'fldaskjfdl;asjf;ld', now(),now(), now(), 0, 1);

INSERT INTO levy_title
(user_id,competence_at,levy_value,installment_qt,system_user_id,cancel_justify,cancel_at,created_at,updated_at,version,level)
VALUES (1, now(), 2536.6,6,1, 'fldaskjfdl;asjf;ld', now(),now(), now(), 0, 1);

INSERT INTO levy_title
(user_id,competence_at,levy_value,installment_qt,system_user_id,cancel_justify,cancel_at,created_at,updated_at,version,level)
VALUES (1, now(), 2356.6,6,1, 'fldaskjfdl;asjf;ld', now(),now(), now(), 0, 1);

INSERT INTO levy_title
(user_id,competence_at,levy_value,installment_qt,system_user_id,cancel_justify,cancel_at,created_at,updated_at,version,level)
VALUES (1, now(), 2526.36,6,1, 'fldaskjfdl;asjf;ld', now(),now(), now(), 0, 1);


INSERT INTO installment
(value,number,levy_title_id,created_at,updated_at,version)
VALUES (120.36,1,1, now(), now(),0);

INSERT INTO installment
(value,number,levy_title_id,created_at,updated_at,version)
VALUES (141.36,2,1, now(), now(),0);

INSERT INTO installment
(value,number,levy_title_id,created_at,updated_at,version)
VALUES (145.36,3,1, now(), now(),0);
