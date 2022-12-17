--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: comment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comment (
    id_comment integer NOT NULL,
    id_user integer,
    id_recipe integer,
    description character varying(255)
);


ALTER TABLE public.comment OWNER TO postgres;

--
-- Name: comment_id_comment_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comment_id_comment_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comment_id_comment_seq OWNER TO postgres;

--
-- Name: comment_id_comment_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comment_id_comment_seq OWNED BY public.comment.id_comment;


--
-- Name: tb_recipes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb_recipes (
    id integer NOT NULL,
    title character varying(255),
    ingredient character varying(255),
    stepall character varying(255),
    image character varying(255)
);


ALTER TABLE public.tb_recipes OWNER TO postgres;

--
-- Name: tb_recipes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tb_recipes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_recipes_id_seq OWNER TO postgres;

--
-- Name: tb_recipes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tb_recipes_id_seq OWNED BY public.tb_recipes.id;


--
-- Name: tb_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb_users (
    id integer NOT NULL,
    name character varying(255),
    email character varying(255),
    password character varying(255),
    phone character varying(255),
    level integer,
    image character varying(255)
);


ALTER TABLE public.tb_users OWNER TO postgres;

--
-- Name: tb_users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tb_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_users_id_seq OWNER TO postgres;

--
-- Name: tb_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tb_users_id_seq OWNED BY public.tb_users.id;


--
-- Name: comment id_comment; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comment ALTER COLUMN id_comment SET DEFAULT nextval('public.comment_id_comment_seq'::regclass);


--
-- Name: tb_recipes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_recipes ALTER COLUMN id SET DEFAULT nextval('public.tb_recipes_id_seq'::regclass);


--
-- Name: tb_users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_users ALTER COLUMN id SET DEFAULT nextval('public.tb_users_id_seq'::regclass);


--
-- Data for Name: comment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comment (id_comment, id_user, id_recipe, description) FROM stdin;
\.


--
-- Data for Name: tb_recipes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tb_recipes (id, title, ingredient, stepall, image) FROM stdin;
67	bakso	ssss\r\nsss\r\nssss	dsds	1666267141184.png
68	kue	dsdsd	dsds	1666267165399.png
70	sayur	dssdsds\r\ndsds	dsdfd	1666267206456.png
71	dagiing	dfdf	dsds	1666267242561.png
72	roti	dsdsd\r\ndsds	dsdsd	1666271912403.png
73	roti bakar	sdsd\r\nsdsd\r\nsdsd	sdsds	1666271938217.png
74	gulai	sdds	dsdsds	1666318605645.png
75	rusa bakar	sds	sdsds	1666318631738.png
76	telur Bakar	-dua buah telur\r\n-Bakar 12 menit	test.mp4	1671160371835.png
\.


--
-- Data for Name: tb_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tb_users (id, name, email, password, phone, level, image) FROM stdin;
34	iqbal	iqbal@gmail.com	$2b$10$cHqh0mVM31MPb93VAu69y.6hYQRkwedWHTjmQ4lnCcuAgAIS8CUty	082180044396	\N	\N
35	alfat	alfat@gmail.com	$2b$10$8lpK.crv/DAYoiO9SaHNfe7LW6ZVlnyXyNK3PHOI3XU/vF5S1n8CK	08218983938	\N	\N
36	elvi	elvi@gmail.com	$2b$10$ZtEFZZeO3/nRZJbyveSKleTMa2xlauNJk.kdkX1BmFdyC40rKKw.2	09212817821	\N	\N
37	kahfi	kahfi@gmail.com	\N	082917218	\N	\N
38	kahfi	kahfi@gmail.com	\N	082917218	\N	\N
39	kahfi	kahfi@gmail.com	$2b$10$7nbRU4Lto5q/olOQ2B21WOnX3nqKmL6j8ywTTvprOKoBcRXVHlzNS	082917218	\N	\N
40	elvi	elvi@gmail.com	$2b$10$nraQTd8MhRe/0NJRCaC15.z0v.w6BCP6BaBwvmbdMKq4xv9zMhS0C	08219839238	\N	\N
41	elviaja	elviaja@gmail.com	$2b$10$mkj9neKrS.P0bpuCVBpa4OyFVbh4oc9I6CMYaKUMMe3/a1xJdYsxS	082182817	\N	\N
42	tiktok	tiktok@gmail.com	$2b$10$a.x2QeqKAuWh4qgnko.BGOllIlkzhrHvtPFzTxddOHf9./9CdbK3.	0828172817	\N	\N
43	agun	agun@gmail.com	$2b$10$AC7EXabYpcs0wUhdEI35huMPAvgS0FUvGMf/z/CxMnJlne7aVC8vC	082129182	\N	\N
44	aac	aac@gmail.com	$2b$10$WiD5oT0cKnHzkF0WlYzpL.1ILMkdXBcYpBstOxFThlkxdBgnzkDU6	082812718	\N	\N
45	preedok	preedok@gmail.com	$2b$10$KDtLjDsnshOkkH0lOokS4uEQPRGGmTGhcEhEvGBOVbIxVSqKhWwwC	08219721927	\N	\N
46	alam	alam@gmail.com	$2b$10$0Be34yISTB1OupPM.wc95ex9pw5DsDUTIF8fUNBl2PQ8VqYYTadhO	0828127182	\N	\N
47	tv	tv@gmail.com	$2b$10$s1g01x/LWYUzVFJez4ffWeMl9torXxByzpwxIGnzHMUuRRLin5GH.	088271872	\N	\N
48	reza	reza@gmail.com	$2b$10$5ZAl.H3pznV4Q/E0VxjD9eaGTxw2PJfagb6KFiG6J5IcMNDG.EM2W	082767263232	\N	\N
49	viko	vio@gmail.com	$2b$10$Fv89Sio0..yiB6mwDuZiRe3axP6FJ.YkYnaciHku/IhamxTm9/HfK	08217281728	\N	\N
50	alfat	alfat@gmail.com	$2b$10$brsdB6SxTYyTh8xnu25Nxus/Tv3WRic1HrdsXzy6HtVqBKBLPRWTO	0828267162	\N	\N
51	dedek	dedek@gmail.com	$2b$10$TG0KCglTSrUyLwIqP0aayeXYo/YmixierKp4KxzTcPWCdGqNt1E.u	089323927	\N	\N
52	kipas	kipas@gmail.com	$2b$10$qzm8SFaaZB9j4GRCriV51.WRsLJUE8kD90BWn1xa37BEqQDO95mBS	08218212712	\N	\N
53	Iqbal	iqbal@mail	$2b$10$7PEyNh312wcW6ibBD/EoNu1u3W9Su144WGLOvgoU.4KNLJ1m9cfu2	7364238	\N	\N
54	Elvi	elvi@mail	$2b$10$whEz3K7FqPXfGT4ISMw4IeJ231HZ8CkjmWRZLFF/oc3Abiujx7eZG	376240	\N	\N
55	boga	boga@mail	$2b$10$nhsFLpnxnT6rkSoHu9RP.OijXqOM8kaDMGBH06iF1RY3/W3KCHbBy	3483434	\N	\N
\.


--
-- Name: comment_id_comment_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comment_id_comment_seq', 1, false);


--
-- Name: tb_recipes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tb_recipes_id_seq', 76, true);


--
-- Name: tb_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tb_users_id_seq', 55, true);


--
-- PostgreSQL database dump complete
--

