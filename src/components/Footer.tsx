import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fonderie Drean</h3>
            <p className="mb-4">
              شركة متخصصة في صناعة أغطية البالوعات والمجاري من حديد الزهر عالي الجودة.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul>
              <li className="mb-2"><a href="/" className="hover:text-amber-400 transition duration-300">الرئيسية</a></li>
              <li className="mb-2"><a href="/about" className="hover:text-amber-400 transition duration-300">من نحن</a></li>
              <li className="mb-2"><a href="/products" className="hover:text-amber-400 transition duration-300">منتجاتنا</a></li>
              <li className="mb-2"><a href="/manufacturing" className="hover:text-amber-400 transition duration-300">عملية التصنيع</a></li>
              <li><a href="/contact" className="hover:text-amber-400 transition duration-300">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <p className="mb-2">العنوان: المنطقة الصناعية</p>
            <p className="mb-2">الهاتف: (يرجى إضافة رقم الهاتف)</p>
            <p>البريد الإلكتروني: info@fonderie-drean.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Fonderie Drean. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
