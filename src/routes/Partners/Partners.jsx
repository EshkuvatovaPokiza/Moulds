import React from 'react';
import image from "../../components/images/repair.png"
import { Container } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./partners.scss"

const Partners = () => {
  const {t}=useTranslation()
  return (
   <Container>
     <div  className='partners'  >
      <h1>Partners</h1>
    <div className="partners__image">
    <img src={image} alt="" />

<p>continue</p>
<Link  to={"/"}  > {t("nav.home")} </Link>

    </div>
    </div>
   </Container>
  )
}

export default Partners