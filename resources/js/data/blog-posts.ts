/**
 * Blog post data matching the original ESE Agency site.
 */
export interface BlogPost {
    slug: string;
    href: string;
    category: string;
    title: string;
    img: string;
    srcset?: string;
    author?: string | null;
    authorAvatar?: string | null;
    readTime?: number | null;
}

const blogPosts: BlogPost[] = [
    {
        "slug": "ese-agency-manifesto-films-denner-blockbuster-mit-granit-xhaka-und-terence-hill-filmreif-inszeniert",
        "href": "/blog/ese-agency-manifesto-films-denner-blockbuster-mit-granit-xhaka-und-terence-hill-filmreif-inszeniert",
        "category": "Denner",
        "title": "ESE Agency & Manifesto Films: Denner-Blockbuster mit Granit Xhaka und Terence Hill filmreif inszeniert",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a21854d66a091af9af3cead_ese-blog-thumbnail-denner-socceritos.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a21854d66a091af9af3cead_ese-blog-thumbnail-denner-socceritos-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a21854d66a091af9af3cead_ese-blog-thumbnail-denner-socceritos-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a21854d66a091af9af3cead_ese-blog-thumbnail-denner-socceritos-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a21854d66a091af9af3cead_ese-blog-thumbnail-denner-socceritos.jpg 1200w",
        "author": "Elia Binelli",
        "authorAvatar": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6ae3620cb2e2ed07fa7322cf_ese-profilbild-elia-03.jpg",
        "readTime": 6
    },
    {
        "slug": "ese-agency-neuer-arbeitgeberauftritt-fur-die-migros-gruppe",
        "href": "/blog/ese-agency-neuer-arbeitgeberauftritt-fur-die-migros-gruppe",
        "category": "Migros Gruppe",
        "title": "Neuer Arbeitgeberauftritt für die Migros-Gruppe",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a21792cef06d8b3c29445b0_ese-blog-thumbnail-migros-kreativkonzept.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a21792cef06d8b3c29445b0_ese-blog-thumbnail-migros-kreativkonzept-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a21792cef06d8b3c29445b0_ese-blog-thumbnail-migros-kreativkonzept-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a21792cef06d8b3c29445b0_ese-blog-thumbnail-migros-kreativkonzept-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a21792cef06d8b3c29445b0_ese-blog-thumbnail-migros-kreativkonzept.jpg 1200w",
        "author": "Elia Binelli",
        "authorAvatar": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6ae3620cb2e2ed07fa7322cf_ese-profilbild-elia-03.jpg",
        "readTime": 5
    },
    {
        "slug": "ese-agency-denner-verpflichtet-den-osterhasen-als-offiziellen-partner",
        "href": "/blog/ese-agency-denner-verpflichtet-den-osterhasen-als-offiziellen-partner",
        "category": "Denner",
        "title": "Denner verpflichtet den Osterhasen als offiziellen Partner",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a216e1955c64bfb040f1364_ese-blog-thumbnail-denner-ostern.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a216e1955c64bfb040f1364_ese-blog-thumbnail-denner-ostern-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a216e1955c64bfb040f1364_ese-blog-thumbnail-denner-ostern-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a216e1955c64bfb040f1364_ese-blog-thumbnail-denner-ostern-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a216e1955c64bfb040f1364_ese-blog-thumbnail-denner-ostern.jpg 1200w",
        "author": "Damian Steffen",
        "authorAvatar": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6554bb45881ab5127b4f08c2_6528faaf79a119a617a69d6a_ese-profilbild-damian2.jpeg",
        "readTime": 1
    },
    {
        "slug": "was-man-nicht-alles-findet-im-herzen-von-zug",
        "href": "/blog/was-man-nicht-alles-findet-im-herzen-von-zug",
        "category": "Metalli",
        "title": "Was man nicht alles findet im Herzen von Zug",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a212fba5f2930f34b559c18_ese-blog-thumbnail-metalli.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a212fba5f2930f34b559c18_ese-blog-thumbnail-metalli-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a212fba5f2930f34b559c18_ese-blog-thumbnail-metalli-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a212fba5f2930f34b559c18_ese-blog-thumbnail-metalli-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a212fba5f2930f34b559c18_ese-blog-thumbnail-metalli.jpg 1200w",
        "author": "Emanuel Ernst",
        "authorAvatar": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6ae2f7a8283fb1090ffca0e6_ese-profilbild-emanuel-02.jpg",
        "readTime": 2
    },
    {
        "slug": "ese-agency-und-denner-spannen-gen-z-rapstar-fur-social-media-kampagne-ein",
        "href": "/blog/ese-agency-und-denner-spannen-gen-z-rapstar-fur-social-media-kampagne-ein",
        "category": "Denner",
        "title": "ESE Agency und Denner spannen Gen-Z-Rapstar für Social-Media-Kampagne ein",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a21284746c9ca5ac23e5cc3_ese-blog-thumbnail-julex.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a21284746c9ca5ac23e5cc3_ese-blog-thumbnail-julex-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a21284746c9ca5ac23e5cc3_ese-blog-thumbnail-julex-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a21284746c9ca5ac23e5cc3_ese-blog-thumbnail-julex-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6a21284746c9ca5ac23e5cc3_ese-blog-thumbnail-julex.jpg 1200w",
        "author": "Elia Binelli",
        "authorAvatar": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6ae3620cb2e2ed07fa7322cf_ese-profilbild-elia-03.jpg",
        "readTime": 4
    },
    {
        "slug": "ese-agency-migros-produzieren-viral-song-grittibanz-im-benzzz",
        "href": "/blog/ese-agency-migros-produzieren-viral-song-grittibanz-im-benzzz",
        "category": "Migros",
        "title": "ESE Agency & Migros produzieren Viral-Song «Grittibänz im Benzzz»",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6984637dac49026f540ae8d3_ese-blog-thumbnail-grittibenz.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6984637dac49026f540ae8d3_ese-blog-thumbnail-grittibenz-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6984637dac49026f540ae8d3_ese-blog-thumbnail-grittibenz-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6984637dac49026f540ae8d3_ese-blog-thumbnail-grittibenz-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6984637dac49026f540ae8d3_ese-blog-thumbnail-grittibenz.jpg 1200w",
        "author": "Elia Binelli",
        "authorAvatar": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6ae3620cb2e2ed07fa7322cf_ese-profilbild-elia-03.jpg",
        "readTime": 2
    },
    {
        "slug": "ese-agency-denner-klaut-lidl-das-schweizer-herz",
        "href": "/blog/ese-agency-denner-klaut-lidl-das-schweizer-herz",
        "category": "Denner",
        "title": "ESE Agency: Denner klaut Lidl das Schweizer Herz",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/699ec03e19158518052b41a0_ese-blog-thumbnail-lidl-herz.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/699ec03e19158518052b41a0_ese-blog-thumbnail-lidl-herz-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/699ec03e19158518052b41a0_ese-blog-thumbnail-lidl-herz-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/699ec03e19158518052b41a0_ese-blog-thumbnail-lidl-herz-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/699ec03e19158518052b41a0_ese-blog-thumbnail-lidl-herz.jpg 1200w",
        "author": "Elia Binelli",
        "authorAvatar": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6ae3620cb2e2ed07fa7322cf_ese-profilbild-elia-03.jpg",
        "readTime": 2
    },
    {
        "slug": "migros-mobile",
        "href": "/blog/migros-mobile",
        "category": "Migros Mobile",
        "title": "ESE Agency: Migros und Swisscom begrüssen Migros Mobile",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbf5bc9ea99e8dbf439fa9_ese-blog-thumbnail-migros-mobile.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbf5bc9ea99e8dbf439fa9_ese-blog-thumbnail-migros-mobile-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbf5bc9ea99e8dbf439fa9_ese-blog-thumbnail-migros-mobile-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbf5bc9ea99e8dbf439fa9_ese-blog-thumbnail-migros-mobile-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbf5bc9ea99e8dbf439fa9_ese-blog-thumbnail-migros-mobile.jpg 1200w",
        "author": null,
        "authorAvatar": null,
        "readTime": 3
    },
    {
        "slug": "watson",
        "href": "/blog/watson",
        "category": "watson Imagekampagne",
        "title": "«News, aber deep»: watson lanciert neue Imagekampagne mit ESE Agency",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbf0bf7549b2082b44f69f_ese-blog-thumbnail-watson.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbf0bf7549b2082b44f69f_ese-blog-thumbnail-watson-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbf0bf7549b2082b44f69f_ese-blog-thumbnail-watson-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbf0bf7549b2082b44f69f_ese-blog-thumbnail-watson-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbf0bf7549b2082b44f69f_ese-blog-thumbnail-watson.jpg 1200w",
        "author": null,
        "authorAvatar": null,
        "readTime": null
    },
    {
        "slug": "ese-agency-verwandelt-office-in-einen-club",
        "href": "/blog/ese-agency-verwandelt-office-in-einen-club",
        "category": "ESE-Party 2025",
        "title": "ESE Agency: Verwandelt Office in einen Club",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbc79e13a5c2152f5d3f02_ese-blog-thumbnail-ese-party-2025.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbc79e13a5c2152f5d3f02_ese-blog-thumbnail-ese-party-2025-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbc79e13a5c2152f5d3f02_ese-blog-thumbnail-ese-party-2025-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbc79e13a5c2152f5d3f02_ese-blog-thumbnail-ese-party-2025-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbc79e13a5c2152f5d3f02_ese-blog-thumbnail-ese-party-2025.jpg 1200w",
        "author": null,
        "authorAvatar": null,
        "readTime": 3
    },
    {
        "slug": "denner-jackpot",
        "href": "/blog/denner-jackpot",
        "category": "Denner Jackpot",
        "title": "Denner verlost in neuer Kampagne einzigartige Mega-Gewinne",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbdb0b7005b08fa32152ee_ese-blog-thumbnail-denner-jackpot-1.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbdb0b7005b08fa32152ee_ese-blog-thumbnail-denner-jackpot-1-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbdb0b7005b08fa32152ee_ese-blog-thumbnail-denner-jackpot-1-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbdb0b7005b08fa32152ee_ese-blog-thumbnail-denner-jackpot-1-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbdb0b7005b08fa32152ee_ese-blog-thumbnail-denner-jackpot-1.jpg 1200w",
        "author": null,
        "authorAvatar": null,
        "readTime": 4
    },
    {
        "slug": "stadtbus-winterthur",
        "href": "/blog/stadtbus-winterthur",
        "category": "Stadtbus Winterthur",
        "title": "ESE Agency setzt Employer-Branding-Kampagne für Stadtbus Winterthur um",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbd6a41d707fbd24074376_ese-blog-thumbnail-stadtbus-winterthur-1.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbd6a41d707fbd24074376_ese-blog-thumbnail-stadtbus-winterthur-1-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbd6a41d707fbd24074376_ese-blog-thumbnail-stadtbus-winterthur-1-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbd6a41d707fbd24074376_ese-blog-thumbnail-stadtbus-winterthur-1-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbd6a41d707fbd24074376_ese-blog-thumbnail-stadtbus-winterthur-1.jpg 1200w",
        "author": null,
        "authorAvatar": null,
        "readTime": 2
    },
    {
        "slug": "ese-agency-expandiert",
        "href": "/blog/ese-agency-expandiert",
        "category": "ESE Agency",
        "title": "Kreativ-Agentur ESE Agency expandiert nach Zürich: Neue Positionierung, neuer Auftritt und neues Büro.",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbd18aaf0bb4053e1166cd_ese-blog-thumbnail-new-office.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbd18aaf0bb4053e1166cd_ese-blog-thumbnail-new-office-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbd18aaf0bb4053e1166cd_ese-blog-thumbnail-new-office-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbd18aaf0bb4053e1166cd_ese-blog-thumbnail-new-office-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbd18aaf0bb4053e1166cd_ese-blog-thumbnail-new-office.jpg 1200w",
        "author": null,
        "authorAvatar": null,
        "readTime": 2
    },
    {
        "slug": "play-and-win",
        "href": "/blog/play-and-win",
        "category": "Migros",
        "title": "Die Migros sorgt mit neuem Handy-Game für Gewinnrausch: ESE Agency setzt Kommunikationskampagne um",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbce2ffe46959cf554c627_ese-blog-thumbnail-play-and-win.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbce2ffe46959cf554c627_ese-blog-thumbnail-play-and-win-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbce2ffe46959cf554c627_ese-blog-thumbnail-play-and-win-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbce2ffe46959cf554c627_ese-blog-thumbnail-play-and-win-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/68cbce2ffe46959cf554c627_ese-blog-thumbnail-play-and-win.jpg 1200w",
        "author": null,
        "authorAvatar": null,
        "readTime": 2
    },
    {
        "slug": "denner-und-ese-agency-mit-superhero-comic-gegen-arbeitskraftemangel",
        "href": "/blog/denner-und-ese-agency-mit-superhero-comic-gegen-arbeitskraftemangel",
        "category": "Denner Superhero-Comic",
        "title": "Denner und ESE Agency: mit Superhero-Comic gegen Arbeitskräftemangel",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/660d3da8b043a2362d0d78f8_ese-blog-img8.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/660d3da8b043a2362d0d78f8_ese-blog-img8-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/660d3da8b043a2362d0d78f8_ese-blog-img8-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/660d3da8b043a2362d0d78f8_ese-blog-img8-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/660d3da8b043a2362d0d78f8_ese-blog-img8.jpg 1200w",
        "author": "Damian Steffen",
        "authorAvatar": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6554bb45881ab5127b4f08c2_6528faaf79a119a617a69d6a_ese-profilbild-damian2.jpeg",
        "readTime": 2
    },
    {
        "slug": "ese-agency-macht-fur-die-migros-kinder-zu-comedystars",
        "href": "/blog/ese-agency-macht-fur-die-migros-kinder-zu-comedystars",
        "category": "Spinmania",
        "title": "ESE Agency macht für die Migros Kinder zu Comedystars",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c112abf9ebff71ce140069_ese-blog-img6.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c112abf9ebff71ce140069_ese-blog-img6-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c112abf9ebff71ce140069_ese-blog-img6-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c112abf9ebff71ce140069_ese-blog-img6-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c112abf9ebff71ce140069_ese-blog-img6.jpg 1200w",
        "author": null,
        "authorAvatar": null,
        "readTime": 2
    },
    {
        "slug": "ese-agency-lasst-es-in-der-migros-spuken",
        "href": "/blog/ese-agency-lasst-es-in-der-migros-spuken",
        "category": "M-Escape",
        "title": "ESE Agency lässt es in der Migros spuken",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c11290f2f1dd398074d883_ese-m-escape-pm-1.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c11290f2f1dd398074d883_ese-m-escape-pm-1-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c11290f2f1dd398074d883_ese-m-escape-pm-1-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c11290f2f1dd398074d883_ese-m-escape-pm-1.jpg 1000w",
        "author": "Damian Steffen",
        "authorAvatar": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6554bb45881ab5127b4f08c2_6528faaf79a119a617a69d6a_ese-profilbild-damian2.jpeg",
        "readTime": 3
    },
    {
        "slug": "ese-agency-stellt-denner-mitarbeitende-ins-spotlight",
        "href": "/blog/ese-agency-stellt-denner-mitarbeitende-ins-spotlight",
        "category": "Alles auf Zukunft",
        "title": "ESE Agency stellt Denner-Mitarbeitende ins Spotlight",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c0d4e710320c6e6e04d3a0_ese-blog-thumbnail-aaz.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c0d4e710320c6e6e04d3a0_ese-blog-thumbnail-aaz-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c0d4e710320c6e6e04d3a0_ese-blog-thumbnail-aaz-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c0d4e710320c6e6e04d3a0_ese-blog-thumbnail-aaz-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c0d4e710320c6e6e04d3a0_ese-blog-thumbnail-aaz.jpg 1200w",
        "author": "Elia Binelli",
        "authorAvatar": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6ae3620cb2e2ed07fa7322cf_ese-profilbild-elia-03.jpg",
        "readTime": 2
    },
    {
        "slug": "ese-agency-lanciert-nachhaltigkeitsplattform-fur-denner",
        "href": "/blog/ese-agency-lanciert-nachhaltigkeitsplattform-fur-denner",
        "category": "Alles auf Zukunft",
        "title": "ESE Agency lanciert Nachhaltigkeitsplattform für Denner",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/652fccb8382c56c3cf37d45b_ese-denner-aaz-5.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/652fccb8382c56c3cf37d45b_ese-denner-aaz-5-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/652fccb8382c56c3cf37d45b_ese-denner-aaz-5-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/652fccb8382c56c3cf37d45b_ese-denner-aaz-5.jpg 1200w",
        "author": "Elia Binelli",
        "authorAvatar": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/6ae3620cb2e2ed07fa7322cf_ese-profilbild-elia-03.jpg",
        "readTime": 2
    },
    {
        "slug": "ist-die-schweiz-bald-in-der-babyrace-mania",
        "href": "/blog/ist-die-schweiz-bald-in-der-babyrace-mania",
        "category": "Babyrace by Denner",
        "title": "Ist die Schweiz bald in der Babyrace-Mania?",
        "img": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c1114ad2f46b59086ad62e_ese-blog-img2.jpg",
        "srcset": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c1114ad2f46b59086ad62e_ese-blog-img2-p-500.jpg 500w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c1114ad2f46b59086ad62e_ese-blog-img2-p-800.jpg 800w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c1114ad2f46b59086ad62e_ese-blog-img2-p-1080.jpg 1080w, https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/65c1114ad2f46b59086ad62e_ese-blog-img2.jpg 1200w",
        "author": "Severin Gamper",
        "authorAvatar": "https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae8e/665dec4e26741ce6ca4c13fe_662f6ca580212fe6f1e6b900_65ba335882e8e2c762cfd792_ese-profilbild-severin.jpeg",
        "readTime": 3
    }
];

export default blogPosts;
