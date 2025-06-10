import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="hero bg-gray-800 text-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">Fonderie Drean</h1>
        <p className="text-xl mb-6">
          متخصصون في صناعة أغطية البالوعات والمجاري من حديد الزهر عالي الجودة
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
          تعرف على منتجاتنا
        </button>
      </section>

      <section className="about mb-8">
        <h2 className="text-3xl font-bold mb-4">مرحباً بكم في مسبكة Fonderie Drean</h2>
        <p className="text-lg mb-4">
          نحن شركة متخصصة في صناعة أغطية البالوعات والمجاري من حديد الزهر. تأسست شركتنا بهدف توفير منتجات عالية الجودة تلبي احتياجات البنية التحتية الحديثة.
        </p>
        <p className="text-lg mb-4">
          نستخدم أحدث التقنيات في صهر وتشكيل حديد الزهر لإنتاج أغطية متينة وطويلة الأمد للبالوعات والمجاري، مصممة لتحمل الظروف القاسية والأحمال الثقيلة.
        </p>
      </section>

      <section className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="product-card bg-white p-6 rounded-lg shadow-md">
          <div className="product-image bg-gray-300 h-48 rounded-md mb-4"></div>
          <h3 className="text-xl font-bold mb-2">أغطية البالوعات</h3>
          <p>
            أغطية بالوعات متينة مصنوعة من حديد الزهر عالي الجودة، مصممة لتحمل الأحمال الثقيلة والظروف المناخية المختلفة.
          </p>
        </div>
        <div className="product-card bg-white p-6 rounded-lg shadow-md">
          <div className="product-image bg-gray-300 h-48 rounded-md mb-4"></div>
          <h3 className="text-xl font-bold mb-2">شبكات التصريف</h3>
          <p>
            شبكات تصريف عالية الكفاءة مصنوعة من حديد الزهر، توفر تصريفاً مثالياً للمياه مع الحفاظ على المتانة والأمان.
          </p>
        </div>
        <div className="product-card bg-white p-6 rounded-lg shadow-md">
          <div className="product-image bg-gray-300 h-48 rounded-md mb-4"></div>
          <h3 className="text-xl font-bold mb-2">منتجات مخصصة</h3>
          <p>
            نقدم خدمات تصنيع منتجات مخصصة من حديد الزهر حسب متطلبات العملاء، بمواصفات دقيقة وجودة عالية.
          </p>
        </div>
      </section>

      <section className="manufacturing mb-8">
        <h2 className="text-3xl font-bold mb-4">عملية التصنيع</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-lg mb-4">
              تبدأ عملية التصنيع لدينا باختيار أفضل المواد الخام من حديد الزهر. يتم صهر هذه المواد في أفران متطورة تحت درجات حرارة عالية للغاية.
            </p>
            <p className="text-lg mb-4">
              بعد ذلك، يتم صب المعدن المنصهر في قوالب مصممة بدقة لإنتاج أغطية البالوعات والمجاري بالأبعاد والمواصفات المطلوبة.
            </p>
            <p className="text-lg">
              تخضع جميع منتجاتنا لاختبارات صارمة للجودة لضمان مطابقتها للمعايير العالمية من حيث المتانة والأداء.
            </p>
          </div>
          <div className="process-image bg-gray-300 h-64 rounded-md"></div>
        </div>
      </section>

      <section className="contact bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">اتصل بنا</h2>
        <p className="text-lg mb-4">
          نحن هنا للإجابة على استفساراتكم وتلبية احتياجاتكم. لا تترددوا في التواصل معنا للحصول على مزيد من المعلومات حول منتجاتنا وخدماتنا.
        </p>
        <div className="contact-info">
          <p className="mb-2"><strong>العنوان:</strong> يرجى إضافة عنوان الشركة</p>
          <p className="mb-2"><strong>الهاتف:</strong> يرجى إضافة رقم الهاتف</p>
          <p className="mb-2"><strong>البريد الإلكتروني:</strong> info@fonderie-drean.com</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
