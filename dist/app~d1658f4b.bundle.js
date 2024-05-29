(()=>{"use strict";var n,A={249:(n,A,e)=>{e.d(A,{A:()=>o});var r=e(354),t=e.n(r),a=e(314),i=e.n(a)()(t());i.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n}\n\na,\ninput,\nbutton,\ntextarea {\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  background-color: white;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #CDE8E5;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n \n.skip-link:focus {\n   top: 0;\n}\n\n/*\n * AppBar\n*/\n\n.app-bar {\n  padding: 8px 16px;\n  background-color: #CDE8E5;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 10px;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n \n.app-bar .app-bar__menu {\n  display: flex;\n  align-items: center;\n}\n \n.app-bar .app-bar__menu button {\n  background-color: transparent;\n  border: none;\n  font-size: 18px;\n  padding: 8px;\n  cursor: pointer;\n  min-width: 44px;\n  min-height: 44px;\n}\n \n.app-bar .app-bar__brand {\n  display: flex;\n  align-items: center;\n}\n \n.app-bar .app-bar__brand h1 {\n  color: #20201d;\n  text-transform: uppercase;\n  user-select: none;\n}\n \n.app-bar .app-bar__navigation {\n  position: absolute;\n  top: 50px;\n  left: -180px;\n  width: 150px;\n  transition: all 0.3s;\n  padding: 8px;\n  background-color: #CDE8E5;\n  overflow: hidden;\n}\n \n.app-bar .app-bar__navigation.open {\n  left: 0;\n}\n \n.app-bar .app-bar__navigation ul li a {\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n/*\n * Top level navigation\n */\n\nnav a {\n  color: #20201d;\n  text-decoration: none;\n  transition: color 0.3s ease;\n  \n}\n\n.logo {\n  width: 8rem;\n  padding: 0.4rem 0;\n}\nnav a:hover {\n  color: #9f6832;\n}\n\n/*\n * Jumbotron\n */\n\n.jumbotron-overlay {\n  padding: 1rem 1rem;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.jumbotron-title {\n  color: #cde8e5;\n  text-align: center;\n  font-size: 3.5rem;\n}\n\n.jumbotron-subtitle {\n  color: #cde8e5;\n  text-align: center;\n  font-size: 1rem;\n}\n\n/*\n * Main Content\n*/\n\nmain {\n  padding: 32px;\n  flex: 1;\n}\n\n.content {\n  margin: 0 auto;\n  min-height: 100%;\n}\n\n.content .content__heading {\n  font-size: 30px;\n  text-align: center;\n  padding: 2px;\n}\n\n/*\n  Restaurants\n*/\n\n.restaurants {\n  display: grid;\n  grid-template-columns: repeat(1fr); /* Mengatur 4 kolom setiap baris */\n  gap: 16px;\n  margin: 32px 0;\n}\n\n/*\n  Restaurant Item\n*/\n\n.restaurant-item {\n  max-width: 1200px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n \n.restaurant-item__header {\n  position: relative;\n}\n\n.restaurant-item:hover {\n  transform: translateY(-5px);\n  transition: transform 0.3s ease-in-out;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n \n.restaurant-item .restaurant-item__header .restaurant-item__header__picture{\n  width: 100%;\n}\n \n.restaurant-item .restaurant-item__header .restaurant-item__header__rating {\n  position: absolute;\n  padding: 8px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  border-radius: 10%;\n  color: white;\n}\n \n.restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\n  margin-left: 10px;\n}\n \n.restaurant-item .restaurant-item__content {\n  padding: 16px;\n}\n \n.restaurant-item .restaurant-item__content h3 {\n  margin: 0 0 10px 0;\n}\n \n.restaurant-item .restaurant-item__content h3 a {\n  min-width: 44px;\n  min-height: 44px;\n  color: #C36A2D;\n  padding: 10px;\n  text-decoration: none;\n}\n \n.restaurant-item .restaurant-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: 'Hind Siliguri', sans-serif;\n  display: -webkit-box;\n  -webkit-line-clamp: 4; \n  -webkit-box-orient: vertical;\n}\n \n/*\n  Restaurant\n*/\n\n.restaurant {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 1000px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n \n.restaurant__name {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 16px;\n  padding: 12px;\n  background-color: #cde8e5;\n  border-radius: 1rem;\n  text-align: center;\n}\n\n.restaurant__picture {\n  width: 100%;\n  max-width: 600px;\n  height: auto;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n\n.restaurant__info {\n  margin-bottom: 24px;\n  padding: 12px;\n  background-color: #cde8e5;\n  border-radius: 1rem;\n}\n\n.restaurant__info h3 {\n  font-size: 20px;\n  margin-bottom: 12px;\n}\n\n.restaurant__info h4 {\n  font-size: 16px;\n  margin-bottom: 8px;\n}\n\n.restaurant__info p {\n  margin-bottom: 8px;\n}\n\n.restaurant_description {\n  margin-bottom: 24px;\n  padding: 12px;\n  background-color: #cde8e5;\n  border-radius: 1rem;\n}\n\n.restaurant_description h3 {\n  font-size: 20px;\n  margin-bottom: 12px;\n}\n\n.restaurant_description p {\n  margin-bottom: 8px;\n}\n\n.restaurant_description h4 {\n  font-size: 16px;\n  margin-bottom: 8px;\n}\n\n.restaurant_description .restaurant__review {\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 16px;\n  margin-bottom: 16px;\n  background-color: #cde8e5;\n  border-radius: 1rem;\n}\n\n.restaurant_description .restaurant__review h5 {\n  font-size: 18px;\n  margin-bottom: 8px;\n}\n\n.restaurant_description .restaurant__review p {\n  margin-bottom: 8px;\n}\n\n.restaurant_description .restaurant__review p:last-child {\n  margin-bottom: 0;\n}\n\n\n/*\n  Like\n*/\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/*\n * footer\n*/\n\nfooter p {\n  font-family: calibri;\n}\n\nfooter p:nth-child(1) {\n  font-size: 30px;\n  font-weight: bold;\n  color: var(--text-color-1);\n  margin: 20px;\n}\n\nfooter p:nth-child(2) {\n  font-size: 16px;\n  color: var(--text-color-1);\n  text-align: center;\n  margin: 5px;\n}\n\nfooter {\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background-color: #cde8e5;\n  border-radius: 0.5rem;\n  width: 100%;\n}\n\n.social-icons a {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #26434e;\n  margin: 20px 10px;\n  border-radius: 50%;\n}\n\n.social-icons {\n  display: flex;\n}\n\n.social-icons i,\n.social i {\n  color: #fff\n}\n\n.social-icons a:hover {\n  background-color: #fffffe;\n  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);\n  transition: all ease 0.5s;\n}\n.social-icons a:hover i,\n.social a:hover i {\n  color: #004643;\n  transition: all ease 0.5s;\n}\n\n.copyright {\n  color: var(--text-color-1);\n  font-size: 15px;\n}\n\n.social {\n  position: fixed;\n  top: 50%;\n  right: 0px;\n  transform: translateY(-50%);\n}\n\n.social a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  margin: 0px;\n  padding: 0px;\n  line-height: 0px;\n  background-color: #004643;\n  border: 1px solid #cbcbcb;\n  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);\n}\n\n.social a:hover {\n  background-color: #abd1c6;\n  color: #004643;\n  transition: all ease 0.5s;\n}\n\n.social i {\n  font-size: 20px;\n  color: #fffffe;\n}\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["* {\n  padding: 0;\n  margin: 0;\n}\n\na,\ninput,\nbutton,\ntextarea {\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n}\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  background-color: white;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #CDE8E5;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n}\n \n.skip-link:focus {\n   top: 0;\n}\n\n/*\n * AppBar\n*/\n\n.app-bar {\n  padding: 8px 16px;\n  background-color: #CDE8E5;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 10px;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n \n.app-bar .app-bar__menu {\n  display: flex;\n  align-items: center;\n}\n \n.app-bar .app-bar__menu button {\n  background-color: transparent;\n  border: none;\n  font-size: 18px;\n  padding: 8px;\n  cursor: pointer;\n  min-width: 44px;\n  min-height: 44px;\n}\n \n.app-bar .app-bar__brand {\n  display: flex;\n  align-items: center;\n}\n \n.app-bar .app-bar__brand h1 {\n  color: #20201d;\n  text-transform: uppercase;\n  user-select: none;\n}\n \n.app-bar .app-bar__navigation {\n  position: absolute;\n  top: 50px;\n  left: -180px;\n  width: 150px;\n  transition: all 0.3s;\n  padding: 8px;\n  background-color: #CDE8E5;\n  overflow: hidden;\n}\n \n.app-bar .app-bar__navigation.open {\n  left: 0;\n}\n \n.app-bar .app-bar__navigation ul li a {\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n/*\n * Top level navigation\n */\n\nnav a {\n  color: #20201d;\n  text-decoration: none;\n  transition: color 0.3s ease;\n  \n}\n\n.logo {\n  width: 8rem;\n  padding: 0.4rem 0;\n}\nnav a:hover {\n  color: #9f6832;\n}\n\n/*\n * Jumbotron\n */\n\n.jumbotron-overlay {\n  padding: 1rem 1rem;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.jumbotron-title {\n  color: #cde8e5;\n  text-align: center;\n  font-size: 3.5rem;\n}\n\n.jumbotron-subtitle {\n  color: #cde8e5;\n  text-align: center;\n  font-size: 1rem;\n}\n\n/*\n * Main Content\n*/\n\nmain {\n  padding: 32px;\n  flex: 1;\n}\n\n.content {\n  margin: 0 auto;\n  min-height: 100%;\n}\n\n.content .content__heading {\n  font-size: 30px;\n  text-align: center;\n  padding: 2px;\n}\n\n/*\n  Restaurants\n*/\n\n.restaurants {\n  display: grid;\n  grid-template-columns: repeat(1fr); /* Mengatur 4 kolom setiap baris */\n  gap: 16px;\n  margin: 32px 0;\n}\n\n/*\n  Restaurant Item\n*/\n\n.restaurant-item {\n  max-width: 1200px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n \n.restaurant-item__header {\n  position: relative;\n}\n\n.restaurant-item:hover {\n  transform: translateY(-5px);\n  transition: transform 0.3s ease-in-out;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n \n.restaurant-item .restaurant-item__header .restaurant-item__header__picture{\n  width: 100%;\n}\n \n.restaurant-item .restaurant-item__header .restaurant-item__header__rating {\n  position: absolute;\n  padding: 8px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  border-radius: 10%;\n  color: white;\n}\n \n.restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\n  margin-left: 10px;\n}\n \n.restaurant-item .restaurant-item__content {\n  padding: 16px;\n}\n \n.restaurant-item .restaurant-item__content h3 {\n  margin: 0 0 10px 0;\n}\n \n.restaurant-item .restaurant-item__content h3 a {\n  min-width: 44px;\n  min-height: 44px;\n  color: #C36A2D;\n  padding: 10px;\n  text-decoration: none;\n}\n \n.restaurant-item .restaurant-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: 'Hind Siliguri', sans-serif;\n  display: -webkit-box;\n  -webkit-line-clamp: 4; \n  -webkit-box-orient: vertical;\n}\n \n/*\n  Restaurant\n*/\n\n.restaurant {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 1000px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n \n.restaurant__name {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 16px;\n  padding: 12px;\n  background-color: #cde8e5;\n  border-radius: 1rem;\n  text-align: center;\n}\n\n.restaurant__picture {\n  width: 100%;\n  max-width: 600px;\n  height: auto;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n\n.restaurant__info {\n  margin-bottom: 24px;\n  padding: 12px;\n  background-color: #cde8e5;\n  border-radius: 1rem;\n}\n\n.restaurant__info h3 {\n  font-size: 20px;\n  margin-bottom: 12px;\n}\n\n.restaurant__info h4 {\n  font-size: 16px;\n  margin-bottom: 8px;\n}\n\n.restaurant__info p {\n  margin-bottom: 8px;\n}\n\n.restaurant_description {\n  margin-bottom: 24px;\n  padding: 12px;\n  background-color: #cde8e5;\n  border-radius: 1rem;\n}\n\n.restaurant_description h3 {\n  font-size: 20px;\n  margin-bottom: 12px;\n}\n\n.restaurant_description p {\n  margin-bottom: 8px;\n}\n\n.restaurant_description h4 {\n  font-size: 16px;\n  margin-bottom: 8px;\n}\n\n.restaurant_description .restaurant__review {\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 16px;\n  margin-bottom: 16px;\n  background-color: #cde8e5;\n  border-radius: 1rem;\n}\n\n.restaurant_description .restaurant__review h5 {\n  font-size: 18px;\n  margin-bottom: 8px;\n}\n\n.restaurant_description .restaurant__review p {\n  margin-bottom: 8px;\n}\n\n.restaurant_description .restaurant__review p:last-child {\n  margin-bottom: 0;\n}\n\n\n/*\n  Like\n*/\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n/*\n * footer\n*/\n\nfooter p {\n  font-family: calibri;\n}\n\nfooter p:nth-child(1) {\n  font-size: 30px;\n  font-weight: bold;\n  color: var(--text-color-1);\n  margin: 20px;\n}\n\nfooter p:nth-child(2) {\n  font-size: 16px;\n  color: var(--text-color-1);\n  text-align: center;\n  margin: 5px;\n}\n\nfooter {\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background-color: #cde8e5;\n  border-radius: 0.5rem;\n  width: 100%;\n}\n\n.social-icons a {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #26434e;\n  margin: 20px 10px;\n  border-radius: 50%;\n}\n\n.social-icons {\n  display: flex;\n}\n\n.social-icons i,\n.social i {\n  color: #fff\n}\n\n.social-icons a:hover {\n  background-color: #fffffe;\n  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);\n  transition: all ease 0.5s;\n}\n.social-icons a:hover i,\n.social a:hover i {\n  color: #004643;\n  transition: all ease 0.5s;\n}\n\n.copyright {\n  color: var(--text-color-1);\n  font-size: 15px;\n}\n\n.social {\n  position: fixed;\n  top: 50%;\n  right: 0px;\n  transform: translateY(-50%);\n}\n\n.social a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  margin: 0px;\n  padding: 0px;\n  line-height: 0px;\n  background-color: #004643;\n  border: 1px solid #cbcbcb;\n  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);\n}\n\n.social a:hover {\n  background-color: #abd1c6;\n  color: #004643;\n  transition: all ease 0.5s;\n}\n\n.social i {\n  font-size: 20px;\n  color: #fffffe;\n}\n"],sourceRoot:""}]);const o=i},936:(n,A,e)=>{e.d(A,{A:()=>u});var r=e(354),t=e.n(r),a=e(314),i=e.n(a),o=e(417),p=e.n(o),s=new URL(e(269),e.b),d=new URL(e(15),e.b),l=new URL(e(815),e.b),c=new URL(e(77),e.b),E=i()(t()),m=p()(s),C=p()(d),B=p()(l),g=p()(c);E.push([n.id,`\n  @media screen and (max-width: 650px) {\n    .jumbotron {\n      height: 60vh;\n      background-image: image-set(\n        url(${m}) 1x,\n        url(${m}) 2x\n      );\n    }\n\n  }\n  @media screen and (min-width: 650px) {\n    .app-bar {\n      grid-template-columns: 1fr auto;\n      padding: 8px 32px;\n    }\n    .jumbotron-overlay {\n      padding: 1rem 2rem;\n    }\n   \n    .app-bar .app-bar__brand h1 {\n      font-size: 1.5em;\n    }\n   \n    .app-bar .app-bar__menu {\n      display: none;\n    }\n   \n    .app-bar .app-bar__navigation {\n      position: static;\n      width: 100%;\n    }\n   \n    .app-bar .app-bar__navigation ul li {\n      display: inline-block;\n    }\n   \n    .app-bar .app-bar__navigation ul li a {\n      display: inline-block;\n      width: 120px;\n      text-align: center;\n      margin: 0;\n    }\n\n    .restaurants {\n      grid-template-columns: 1fr 1fr;\n    }\n   \n    .restaurant {\n      grid-template-columns: auto 1fr;\n    }\n   \n    .restaurant .restaurant__name {\n      grid-column-start: 1;\n      grid-column-end: 3;\n    }\n   \n    .restaurant .restaurant__description {\n      grid-column-start: 1;\n      grid-column-end: 3;\n    }\n  }\n\n  @media screen and (min-width: 650px) and (max-width: 1199px) {\n    .jumbotron {\n      height: 60vh;\n      background-image: image-set(\n        url(${C}) 1x,\n        url(${C}) 2x\n      );\n    }\n  }\n  @media screen and (min-width: 800px) {\n    .app-bar .app-bar__brand h1 {\n      font-size: 2em;\n    }\n  }\n\n  @media screen and (min-width: 850px) {\n    .restaurants {\n      grid-template-columns: repeat(3, 1fr);\n    }\n    .jumbotron-overlay {\n      padding: 1rem 10rem;\n    }\n  }\n   \n  @media screen and (min-width: 1200px) {\n    .restaurants {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    .jumbotron {\n      height: 60vh;\n      max-width: 1200px;\n      margin: 0 auto;\n      background-size: cover;\n      background-position: center;\n      background-image: image-set(\n        url(${B}) 1x,\n        url(${B}) 2x\n      );\n    }\n    .jumbotron-overlay {\n      padding: 1rem 0rem;\n    }\n  }\n   \n  @media screen and (min-width: 1600px) {\n    .restaurants {\n        grid-template-columns: repeat(4, 1fr);\n        max-width: 1200px;\n        margin: 0 auto;\n    }\n    .jumbotron {\n      height: 60vh;\n      max-width: 1200px;\n      margin: 0 auto;\n      background-size: cover;\n      background-position: center;\n      background-image: image-set(\n        url(${g}) 1x,\n        url(${g}) 2x\n      );\n    }\n  }`,"",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:";EACE;IACE;MACE,YAAY;MACZ;;;OAGC;IACH;;EAEF;EACA;IACE;MACE,+BAA+B;MAC/B,iBAAiB;IACnB;IACA;MACE,kBAAkB;IACpB;;IAEA;MACE,gBAAgB;IAClB;;IAEA;MACE,aAAa;IACf;;IAEA;MACE,gBAAgB;MAChB,WAAW;IACb;;IAEA;MACE,qBAAqB;IACvB;;IAEA;MACE,qBAAqB;MACrB,YAAY;MACZ,kBAAkB;MAClB,SAAS;IACX;;IAEA;MACE,8BAA8B;IAChC;;IAEA;MACE,+BAA+B;IACjC;;IAEA;MACE,oBAAoB;MACpB,kBAAkB;IACpB;;IAEA;MACE,oBAAoB;MACpB,kBAAkB;IACpB;EACF;;EAEA;IACE;MACE,YAAY;MACZ;;;OAGC;IACH;EACF;EACA;IACE;MACE,cAAc;IAChB;EACF;;EAEA;IACE;MACE,qCAAqC;IACvC;IACA;MACE,mBAAmB;IACrB;EACF;;EAEA;IACE;MACE,qCAAqC;IACvC;;IAEA;MACE,YAAY;MACZ,iBAAiB;MACjB,cAAc;MACd,sBAAsB;MACtB,2BAA2B;MAC3B;;;OAGC;IACH;IACA;MACE,kBAAkB;IACpB;EACF;;EAEA;IACE;QACI,qCAAqC;QACrC,iBAAiB;QACjB,cAAc;IAClB;IACA;MACE,YAAY;MACZ,iBAAiB;MACjB,cAAc;MACd,sBAAsB;MACtB,2BAA2B;MAC3B;;;OAGC;IACH;EACF",sourcesContent:["\n  @media screen and (max-width: 650px) {\n    .jumbotron {\n      height: 60vh;\n      background-image: image-set(\n        url(../public/images/heros/hero-image_2-large-small.jpg) 1x,\n        url(../public/images/heros/hero-image_2-large-small.jpg) 2x\n      );\n    }\n\n  }\n  @media screen and (min-width: 650px) {\n    .app-bar {\n      grid-template-columns: 1fr auto;\n      padding: 8px 32px;\n    }\n    .jumbotron-overlay {\n      padding: 1rem 2rem;\n    }\n   \n    .app-bar .app-bar__brand h1 {\n      font-size: 1.5em;\n    }\n   \n    .app-bar .app-bar__menu {\n      display: none;\n    }\n   \n    .app-bar .app-bar__navigation {\n      position: static;\n      width: 100%;\n    }\n   \n    .app-bar .app-bar__navigation ul li {\n      display: inline-block;\n    }\n   \n    .app-bar .app-bar__navigation ul li a {\n      display: inline-block;\n      width: 120px;\n      text-align: center;\n      margin: 0;\n    }\n\n    .restaurants {\n      grid-template-columns: 1fr 1fr;\n    }\n   \n    .restaurant {\n      grid-template-columns: auto 1fr;\n    }\n   \n    .restaurant .restaurant__name {\n      grid-column-start: 1;\n      grid-column-end: 3;\n    }\n   \n    .restaurant .restaurant__description {\n      grid-column-start: 1;\n      grid-column-end: 3;\n    }\n  }\n\n  @media screen and (min-width: 650px) and (max-width: 1199px) {\n    .jumbotron {\n      height: 60vh;\n      background-image: image-set(\n        url(../public/images/heros/hero-image_2-large-medium.jpg) 1x,\n        url(../public/images/heros/hero-image_2-large-medium.jpg) 2x\n      );\n    }\n  }\n  @media screen and (min-width: 800px) {\n    .app-bar .app-bar__brand h1 {\n      font-size: 2em;\n    }\n  }\n\n  @media screen and (min-width: 850px) {\n    .restaurants {\n      grid-template-columns: repeat(3, 1fr);\n    }\n    .jumbotron-overlay {\n      padding: 1rem 10rem;\n    }\n  }\n   \n  @media screen and (min-width: 1200px) {\n    .restaurants {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    .jumbotron {\n      height: 60vh;\n      max-width: 1200px;\n      margin: 0 auto;\n      background-size: cover;\n      background-position: center;\n      background-image: image-set(\n        url(../public/images/heros/hero-image_2-large.jpg) 1x,\n        url(../public/images/heros/hero-image_2-large.jpg) 2x\n      );\n    }\n    .jumbotron-overlay {\n      padding: 1rem 0rem;\n    }\n  }\n   \n  @media screen and (min-width: 1600px) {\n    .restaurants {\n        grid-template-columns: repeat(4, 1fr);\n        max-width: 1200px;\n        margin: 0 auto;\n    }\n    .jumbotron {\n      height: 60vh;\n      max-width: 1200px;\n      margin: 0 auto;\n      background-size: cover;\n      background-position: center;\n      background-image: image-set(\n        url(../public/images/heros/hero-image_2.jpg) 1x,\n        url(../public/images/heros/hero-image_2.jpg) 2x\n      );\n    }\n  }"],sourceRoot:""}]);const u=E},810:(n,A,e)=>{var r=e(72),t=e.n(r),a=e(825),i=e.n(a),o=e(659),p=e.n(o),s=e(56),d=e.n(s),l=e(540),c=e.n(l),E=e(113),m=e.n(E),C=e(249),B={};B.styleTagTransform=m(),B.setAttributes=d(),B.insert=p().bind(null,"head"),B.domAPI=i(),B.insertStyleElement=c(),t()(C.A,B),C.A&&C.A.locals&&C.A.locals},47:(n,A,e)=>{var r=e(72),t=e.n(r),a=e(825),i=e.n(a),o=e(659),p=e.n(o),s=e(56),d=e.n(s),l=e(540),c=e.n(l),E=e(113),m=e.n(E),C=e(936),B={};B.styleTagTransform=m(),B.setAttributes=d(),B.insert=p().bind(null,"head"),B.domAPI=i(),B.insertStyleElement=c(),t()(C.A,B),C.A&&C.A.locals&&C.A.locals}},e={};function r(n){var t=e[n];if(void 0!==t)return t.exports;var a=e[n]={id:n,exports:{}};return A[n](a,a.exports,r),a.exports}r.m=A,n=[],r.O=(A,e,t,a)=>{if(!e){var i=1/0;for(d=0;d<n.length;d++){for(var[e,t,a]=n[d],o=!0,p=0;p<e.length;p++)(!1&a||i>=a)&&Object.keys(r.O).every((n=>r.O[n](e[p])))?e.splice(p--,1):(o=!1,a<i&&(i=a));if(o){n.splice(d--,1);var s=t();void 0!==s&&(A=s)}}return A}a=a||0;for(var d=n.length;d>0&&n[d-1][2]>a;d--)n[d]=n[d-1];n[d]=[e,t,a]},r.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return r.d(A,{a:A}),A},r.d=(n,A)=>{for(var e in A)r.o(A,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:A[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var A=r.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var e=A.getElementsByTagName("script");if(e.length)for(var t=e.length-1;t>-1&&(!n||!/^http(s?):/.test(n));)n=e[t--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{r.b=document.baseURI||self.location.href;var n={580:0};r.O.j=A=>0===n[A];var A=(A,e)=>{var t,a,[i,o,p]=e,s=0;if(i.some((A=>0!==n[A]))){for(t in o)r.o(o,t)&&(r.m[t]=o[t]);if(p)var d=p(r)}for(A&&A(e);s<i.length;s++)a=i[s],r.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return r.O(d)},e=self.webpackChunkmilkyway_apps=self.webpackChunkmilkyway_apps||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),r.nc=void 0;var t=r.O(void 0,[452,986,71,74,720],(()=>r(956)));t=r.O(t)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map