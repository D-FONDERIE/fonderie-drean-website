import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">اتصل بنا</h1>
      
      <p className="text-lg mb-6">
        نحن في Fonderie Drean نرحب بتواصلكم معنا. سواء كنتم ترغبون في الاستفسار عن منتجاتنا، أو طلب عرض سعر، أو تقديم ملاحظات، فريقنا جاهز للرد على استفساراتكم وتلبية احتياجاتكم.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">معلومات الاتصال</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">العنوان:</h3>
            <p>
              Fonderie Drean<br />
              المنطقة الصناعية<br />
              البراكنة حصة رقم 01 بلدية الذرعان -ولاية الطارف-
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">الهاتف:</h3>
            <p>
             الهاتف:   +213770462306<br />
              الهاتف02: +213550152422
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">البريد الإلكتروني:</h3>
            <p>
              fonderieinfo@gmail.com
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">ساعات العمل:</h3>
            <p>
              الأحد - الخميس: 8:00 صباحاً - 4:00 مساءً<br />
              الجمعة - السبت: مغلق
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">نموذج الاتصال</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">الاسم الكامل *</label>
              <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">البريد الإلكتروني *</label>
              <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">رقم الهاتف</label>
              <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">الموضوع *</label>
              <input type="text" id="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">الرسالة *</label>
              <textarea id="message" rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required></textarea>
            </div>
            
            <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">موقعنا</h2>
        <div className="map-placeholder bg-gray-300 h-80 rounded-md flex items-center justify-center">
          <p className="text-gray-600"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102386.1967244732!2d7.717051400000001!3d36.68487105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f00b5d4658611f%3A0x27b6bd569eca0667!2sFonderie%20Dr%C3%A9an!5e0!3m2!1sfr!2sdz!4v1750064108297!5m2!1sfr!2sdz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        </div>
      </div>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">استفسارات المبيعات</h2>
        <p className="text-lg mb-4">
          إذا كنت ترغب في الحصول على معلومات حول منتجاتنا أو طلب عرض سعر، يرجى التواصل مع فريق المبيعات لدينا. سيكون فريقنا سعيداً بمساعدتك في اختيار المنتجات المناسبة لاحتياجاتك وتقديم عروض أسعار تنافسية.
        </p>
        <p className="text-lg">
          للمشاريع الكبيرة أو الطلبات المخصصة، يمكننا ترتيب اجتماع لمناقشة متطلباتك بالتفصيل وتقديم الحلول المناسبة.
        </p>
      </section>
    </div>
  );
};

export default Contact;
