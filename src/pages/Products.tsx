import React from 'react';

const Products: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">منتجاتنا</h1>
      
      <p className="text-lg mb-6">
        تتخصص شركة Fonderie Drean في إنتاج مجموعة متنوعة من أغطية البالوعات والمجاري المصنوعة من حديد الزهر عالي الجودة. تتميز منتجاتنا بالمتانة والموثوقية والتصميم الوظيفي الذي يلبي احتياجات مختلف المشاريع والتطبيقات.
      </p>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">أغطية البالوعات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="product-image bg-gray-300 h-64 rounded-md mb-4"></div>
            <h3 className="text-2xl font-bold mb-2">أغطية بالوعات للطرق السريعة</h3>
            <p className="mb-4">
              مصممة خصيصاً لتحمل الأحمال الثقيلة على الطرق السريعة والشوارع الرئيسية. تتميز هذه الأغطية بقدرتها على تحمل مرور المركبات الثقيلة بشكل متكرر دون أن تتأثر.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>مقاومة عالية للتآكل والصدأ</li>
              <li>تصميم مانع للانزلاق لضمان السلامة</li>
              <li>متوفرة بأحجام مختلفة تناسب جميع الاحتياجات</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="product-image bg-gray-300 h-64 rounded-md mb-4"></div>
            <h3 className="text-2xl font-bold mb-2">أغطية بالوعات للمناطق السكنية</h3>
            <p className="mb-4">
              مصممة للاستخدام في المناطق السكنية والأحياء، توفر هذه الأغطية توازناً مثالياً بين المتانة والجمالية، مع الحفاظ على مستويات عالية من السلامة.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>تصميمات جمالية تتناسب مع المناطق السكنية</li>
              <li>سهلة التركيب والصيانة</li>
              <li>مقاومة للعوامل الجوية المختلفة</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">شبكات التصريف</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="product-image bg-gray-300 h-64 rounded-md mb-4"></div>
            <h3 className="text-2xl font-bold mb-2">شبكات تصريف للشوارع</h3>
            <p className="mb-4">
              مصممة لتوفير تصريف فعال لمياه الأمطار في الشوارع والطرقات. تتميز بفتحات مصممة بدقة لضمان تدفق المياه بكفاءة مع منع مرور المخلفات الكبيرة.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>تصميم يمنع انسداد قنوات التصريف</li>
              <li>سعة تصريف عالية للمياه</li>
              <li>مقاومة للضغط والأحمال الثقيلة</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="product-image bg-gray-300 h-64 rounded-md mb-4"></div>
            <h3 className="text-2xl font-bold mb-2">شبكات تصريف للمناطق الصناعية</h3>
            <p className="mb-4">
              مصممة خصيصاً للاستخدام في المناطق الصناعية التي تتطلب قدرة تحمل استثنائية ومقاومة للمواد الكيميائية والزيوت.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>مقاومة للمواد الكيميائية والزيوت</li>
              <li>قدرة تحمل عالية للأحمال الثقيلة</li>
              <li>تصميم يسهل عمليات التنظيف والصيانة</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">منتجات مخصصة</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg mb-4">
            نقدم في Fonderie Drean خدمة تصنيع منتجات مخصصة من حديد الزهر حسب متطلبات العملاء. سواء كنت تحتاج إلى أغطية بالوعات بمواصفات خاصة، أو منتجات أخرى من حديد الزهر، يمكننا تلبية احتياجاتك بدقة وجودة عالية.
          </p>
          <p className="text-lg mb-4">
            يعمل فريقنا من المهندسين والفنيين المتخصصين معك بداية من مرحلة التصميم وحتى الإنتاج النهائي، لضمان تلبية المنتج لجميع متطلباتك واحتياجاتك.
          </p>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-xl font-bold mb-2">لطلب منتج مخصص:</h3>
            <p>
              يرجى التواصل معنا عبر صفحة الاتصال لمناقشة متطلباتك والحصول على عرض سعر مخصص.
            </p>
          </div>
        </div>
      </section>
      
      <section className="quality-standards bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">معايير الجودة</h2>
        <p className="text-lg mb-4">
          تلتزم جميع منتجاتنا بأعلى معايير الجودة العالمية. نقوم بإجراء اختبارات صارمة على كل منتج للتأكد من مطابقته للمواصفات المطلوبة من حيث المتانة والأداء والسلامة.
        </p>
        <p className="text-lg">
          نفتخر بحصول منتجاتنا على شهادات الجودة المعترف بها دولياً، مما يؤكد التزامنا بتقديم منتجات تلبي أعلى المعايير وتفوق توقعات عملائنا.
        </p>
      </section>
    </div>
  );
};

export default Products;
