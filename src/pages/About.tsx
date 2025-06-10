import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">من نحن</h1>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">قصة Fonderie Drean</h2>
        <p className="text-lg mb-4">
          تأسست شركة Fonderie Drean بهدف توفير منتجات عالية الجودة من حديد الزهر لتلبية احتياجات البنية التحتية الحديثة. على مر السنين، اكتسبنا خبرة واسعة في مجال صناعة أغطية البالوعات والمجاري، مما جعلنا من الشركات الرائدة في هذا المجال.
        </p>
        <p className="text-lg mb-4">
          نفتخر بتقديم منتجات تجمع بين المتانة والجودة العالية والتصميم الوظيفي. تستخدم منتجاتنا في مشاريع البنية التحتية المختلفة، من الطرق السريعة إلى المناطق السكنية والتجارية.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">رؤيتنا</h2>
        <p className="text-lg mb-4">
          نسعى لأن نكون الشركة الرائدة في مجال صناعة منتجات حديد الزهر للبنية التحتية، من خلال الالتزام بأعلى معايير الجودة والابتكار المستمر في عمليات التصنيع.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">مهمتنا</h2>
        <p className="text-lg mb-4">
          تتمثل مهمتنا في توفير منتجات آمنة وموثوقة وطويلة الأمد من حديد الزهر، تساهم في تطوير البنية التحتية وتحسين جودة الحياة في المجتمعات التي نخدمها.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">قيمنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">الجودة</h3>
            <p>
              نلتزم بتقديم منتجات تتميز بأعلى مستويات الجودة، من خلال اختيار أفضل المواد الخام واتباع أدق معايير التصنيع.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">الابتكار</h3>
            <p>
              نسعى دائماً لتطوير عملياتنا وتقنياتنا لإنتاج منتجات أكثر كفاءة ومتانة.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">الاستدامة</h3>
            <p>
              نحرص على اتباع ممارسات صديقة للبيئة في عمليات التصنيع، والاستخدام الأمثل للموارد.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">خدمة العملاء</h3>
            <p>
              نضع رضا العملاء في مقدمة أولوياتنا، ونسعى لتلبية احتياجاتهم وتجاوز توقعاتهم.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">فريقنا</h2>
        <p className="text-lg mb-4">
          يتكون فريقنا من خبراء متخصصين في مجال صناعة المعادن، يتمتعون بخبرة واسعة وشغف كبير لتقديم أفضل المنتجات. نحرص على تطوير مهارات فريقنا باستمرار لمواكبة أحدث التقنيات والمعايير في الصناعة.
        </p>
      </section>
    </div>
  );
};

export default About;
