import React from 'react';
import {Container} from "../../utils/utils";
import "./offersection.scss";
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const OfferSection = () => {
  const location=useLocation();
  const exceptionalRoutes=["/login","/admin","/admin/create" , "/admin/orders/all", "/admin/orders/contacted", "/admin/orders/notcontacted" ,"/partners" ,"/aboutus", "/contact" ]
  const {t}=useTranslation()
  return !exceptionalRoutes.includes(location.pathname) ?  (
  
    <Container>
          <div className='offer-section__wrapper'   >
        <h1>{t("offer.h1")}</h1>
        <div className="offer-section__content">

            <div className="offer-section__content-item">
                <h3>{t("offer.li-title-1")}</h3>
                <p>{t("offer.li-p-1")}</p>
            </div>
            <div className="offer-section__content-item">
                <h3>{t("offer.li-title-2")}</h3>
                <p>{t("offer.li-p-2")}</p>
            </div>
            <div className="offer-section__content-item">
                <h3>{t("offer.li-title-3")}</h3>
                <p>{t("offer.li-title-3")}</p>
            </div>
            <div className="offer-section__content-item">
                <h3>{t("offer.li-title-4")}</h3>
                <p>{t("offer.li-p-4")}</p>
            </div>
        </div>

          </div>
        </Container> 

  
  ):<></>
}

export default OfferSection