import React from 'react';

const Manufacturing: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">عملية التصنيع</h1>
      
      <p className="text-lg mb-6">
        في Fonderie Drean، نفخر بعملية تصنيع متطورة تجمع بين الخبرة التقليدية في صناعة المعادن والتكنولوجيا الحديثة. تمر منتجاتنا من أغطية البالوعات والمجاري بعدة مراحل دقيقة لضمان أعلى مستويات الجودة والمتانة.
      </p>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">مراحل التصنيع</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-3">1. اختيار المواد الخام</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                تبدأ عملية التصنيع باختيار أفضل المواد الخام من حديد الزهر. نحرص على انتقاء مواد ذات جودة عالية لضمان متانة وموثوقية منتجاتنا النهائية.
              </p>
              <p>
                يتم فحص المواد الخام بدقة للتأكد من خلوها من الشوائب والعيوب التي قد تؤثر على جودة المنتج النهائي. نستخدم مزيجاً دقيقاً من المعادن لتحقيق الخصائص المطلوبة في منتجاتنا.
              </p>
            </div>
            <div className="process-image bg-gray-300 h-64 rounded-md"></div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-3">2. صهر المعادن</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="process-image bg-gray-300 h-64 rounded-md"></div>
            <div>
              <p className="mb-4">
                يتم صهر المواد الخام في أفران متطورة تحت درجات حرارة عالية تصل إلى 1500 درجة مئوية. تتيح هذه العملية الحصول على معدن منصهر بخصائص متجانسة.
              </p>
              <p>
                يقوم فريقنا من الخبراء بمراقبة عملية الصهر بدقة، والتحكم في درجات الحرارة والتركيبة الكيميائية للمعدن المنصهر لضمان الحصول على أفضل النتائج.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-3">3. تحضير القوالب</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                يتم تصميم وتحضير قوالب دقيقة لصب المعدن المنصهر. تُصنع هذه القوالب من مواد خاصة قادرة على تحمل درجات الحرارة العالية للمعدن المنصهر.
              </p>
              <p>
                يتم تصميم القوالب بعناية لضمان الحصول على المنتج بالأبعاد والمواصفات المطلوبة بدقة. كما يتم معالجة القوالب بمواد خاصة لتسهيل عملية فصل المنتج النهائي عن القالب.
              </p>
            </div>
            <div className="process-image bg-gray-300 h-64 rounded-md"></div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-3">4. عملية الصب</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="process-image bg-gray-300 h-64 rounded-md"></div>
            <div>
              <p className="mb-4">
                يتم صب المعدن المنصهر في القوالب المُعدة مسبقاً بدقة وعناية. تتطلب هذه العملية مهارة عالية لضمان توزيع المعدن بشكل متساوٍ داخل القالب.
              </p>
              <p>
                بعد الصب، يُترك المعدن ليبرد ويتصلب تدريجياً. تتم مراقبة عملية التبريد بعناية لتجنب حدوث تشققات أو عيوب في المنتج.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-3">5. المعالجة والتشطيب</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                بعد تبريد المنتج، يتم إخراجه من القالب ومعالجته للتخلص من أي زوائد أو شوائب. ثم تبدأ مرحلة التشطيب التي تشمل عمليات الصنفرة والتنعيم لإعطاء المنتج مظهراً نهائياً احترافياً.
              </p>
              <p>
                قد تتضمن هذه المرحلة أيضاً عمليات طلاء خاصة لحماية المنتج من التآكل والصدأ، وإضافة علامات أو نقوش حسب متطلبات العميل.
              </p>
            </div>
            <div className="process-image bg-gray-300 h-64 rounded-md"></div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-3">6. اختبار الجودة</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="process-image bg-gray-300 h-64 rounded-md"></div>
            <div>
              <p className="mb-4">
                تخضع جميع منتجاتنا لاختبارات صارمة للجودة قبل تسليمها للعملاء. تشمل هذه الاختبارات فحص الأبعاد والوزن والمتانة ومقاومة الضغط.
              </p>
              <p>
                نستخدم معدات متطورة لإجراء هذه الاختبارات، ونتبع معايير صارمة لضمان مطابقة منتجاتنا للمواصفات العالمية وتلبيتها لاحتياجات العملاء.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">التكنولوجيا المستخدمة</h2>
        <p className="text-lg mb-4">
          نستثمر في أحدث التقنيات والمعدات لتحسين عمليات التصنيع وضمان جودة منتجاتنا. تشمل التكنولوجيا المستخدمة في مصنعنا:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">أفران صهر متطورة</h3>
            <p>
              تتيح التحكم الدقيق في درجات الحرارة وتركيبة المعدن المنصهر.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">أنظمة تصميم بمساعدة الحاسوب</h3>
            <p>
              لتصميم القوالب والمنتجات بدقة عالية.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">معدات اختبار متطورة</h3>
            <p>
              لضمان مطابقة المنتجات للمعايير العالمية.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">الاستدامة في التصنيع</h2>
        <p className="text-lg mb-4">
          نلتزم في Fonderie Drean بممارسات التصنيع المستدامة. نسعى جاهدين لتقليل الأثر البيئي لعملياتنا من خلال:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>إعادة تدوير المخلفات المعدنية</li>
          <li>استخدام تقنيات تقلل من استهلاك الطاقة</li>
          <li>الحد من الانبعاثات الضارة</li>
          <li>تطبيق أنظمة إدارة النفايات بكفاءة</li>
        </ul>
        <p className="text-lg">
          نؤمن بأن الاستدامة ليست مجرد مسؤولية بيئية، بل هي أيضاً استراتيجية عمل تساهم في تحسين كفاءة الإنتاج وتقليل التكاليف على المدى الطويل.
        </p>
      </section>
    </div>
  );
};

export default Manufacturing;
