create type role as enum('client','manager','admin','owner_of_place');

create type slot_status as enum ('available','unavailable');

create table if not exists "user"
(
	id bigserial not null
		constraint user_pk
			primary key,
	phonenumber varchar(255),
	role role,
	name varchar(255),
	surname varchar(255),
	accoutid bigint,
	parking_area_id bigint,
	email varchar(255),
	login varchar(255),
	hash varchar(1000)
);

alter table "user" owner to postgres;

create unique index if not exists user_id_uindex
	on "user" (id);


create table if not exists account
(
    id bigserial not null
        constraint account_pk
            primary key,
    balance integer
);

alter table account owner to postgres;

create unique index if not exists account_id_uindex
    on account (id);

create table if not exists parking_slot
(
    id bigserial not null
        constraint parking_slot_pk
            primary key,
    time_before timestamp,
    time_after timestamp,
    price_per_hour integer,
    parking_area_id bigint,
    photo_path varchar(1000),
    status slot_status
);

alter table parking_slot owner to postgres;

create unique index if not exists parking_slot_id_uindex
    on parking_slot (id);

create table if not exists parking_area
(
    id bigserial not null
        constraint parking_area_pk
            primary key,
    location varchar(1000)
);

alter table parking_area owner to postgres;

create unique index if not exists parking_area_id_uindex
    on parking_area (id);

create table if not exists tokens
(
	id bigserial not null
		constraint tokens_pk
			primary key,
	value varchar(1000),
	created_at timestamp,
	expired_date_time timestamp,
	usver_id bigint
		constraint tokens_usvers__fk
			references usvers
);

alter table tokens owner to postgres;

create unique index if not exists tokens_id_uindex
	on tokens (id);

