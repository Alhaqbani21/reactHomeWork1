import React from 'react';
import './CardSection.css';
import Card from '../Card/Card';
import Btn1 from '../Btn1/Btn1';

function CardSection() {
  return (
    <>
      <div className="cardSectionContainer">
        <div className="cardsContainer">
          <Card
            type="برنامج"
            title="حوكمة وسرية البيانات في بيئة العمل"
            location="الرياض"
            date="15/05/2024"
            duration="أسبوع واحد"
            btn="التفاصيل"
          />
          <Card
            type="معسكر"
            title="هندسة الحوسبة السحابية المتقدمة AWS"
            location="الرياض"
            date="15/05/2024"
            duration="4 اسابيع"
            btn="التفاصيل"
          />
          <Card
            type="لقاء"
            title="حوكمة وسرية البيانات في بيئة العمل"
            location="الرياض"
            date="15/05/2024"
            duration="يوم"
            btn="التفاصيل"
          />
          <Card
            type="لقاء"
            title="حوكمة وسرية البيانات في بيئة العمل"
            location="الرياض"
            date="15/05/2020"
            duration="يوم"
            btn="التفاصيل"
          />
          <Card
            type="لقاء"
            title="حوكمة وسرية البيانات في بيئة العمل"
            location="الرياض"
            date="15/05/2020"
            duration="يوم"
            btn="التفاصيل"
          />
          <Card
            type="لقاء"
            title="حوكمة وسرية البيانات في بيئة العمل"
            location="الرياض"
            date="15/05/2020"
            duration="يوم"
            btn="التفاصيل"
          />
        </div>
      </div>
      <Btn1 name="تحميل المزيد" />
    </>
  );
}

export default CardSection;
