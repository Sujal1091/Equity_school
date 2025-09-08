import React from 'react';
import { FileText } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Last updated: January 2025
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
          </div>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <p>
              These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with <strong>My Equity School</strong> 
              website and educational services operated by <strong>My Equity School</strong> ("us", "we", or "our").
            </p>

            <p>
              Please read these Terms and Conditions carefully before using our educational services or website.
            </p>

            <p>
              By enrolling in our courses or using our educational services, you agree to be bound by these Terms. If you disagree with any part of these terms, 
              then you may not access our services.
            </p>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Definitions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>School</strong> (referred to as "the School", "we", "us" or "our") refers to My Equity School.</li>
                <li><strong>Services</strong> refers to our educational courses, website, and learning materials.</li>
                <li><strong>Student</strong> or <strong>You</strong> refers to the individual enrolling in or accessing our educational services.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Educational Services</h3>
              <p>
                Our educational services are designed to provide financial literacy education. You agree to use our services for educational purposes only and agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Share course materials or content without permission</li>
                <li>Use our educational content for commercial purposes without authorization</li>
                <li>Disrupt the learning environment for other students</li>
                <li>Provide false information during enrollment</li>
                <li>Use our services for any unlawful purpose</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Course Enrollment and Access</h3>
              <p>
                Course enrollment is subject to availability and prerequisites. We reserve the right to modify course content, schedules, or discontinue courses. 
                Course fees are subject to change with advance notice to enrolled students.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Tuition and Payment</h3>
              <p>
                Tuition fees are due at the time of enrollment unless otherwise arranged. We offer various payment options including installment plans for eligible students. 
                All transactions are processed securely through our payment partners.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">5. Refund and Withdrawal Policy</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="font-semibold text-yellow-800">Important Notice:</p>
                <p className="text-yellow-700">
                  Please review our refund and withdrawal policy carefully before enrolling in courses.
                </p>
              </div>
              <p>
                <strong>Refund Policy:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Full refunds available within 7 days of course start date</li>
                <li>Partial refunds (50%) available within 14 days of course start date</li>
                <li>No refunds after 14 days from course start date</li>
                <li>Completed courses or certificates issued are non-refundable</li>
                <li>Refund processing time is 7-14 business days after approval</li>
              </ul>
              <p>
                <strong>Course Withdrawal Policy:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Course withdrawals must be requested in writing</li>
                <li>Students may withdraw from courses subject to our refund policy above</li>
                <li>Incomplete courses do not qualify for certificates or credentials</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h3>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-red-700">
                  <strong>Educational Disclaimer:</strong> My Equity School provides educational content for informational purposes only. 
                  We do not provide financial advice, and students should consult with qualified financial professionals before making investment decisions. 
                  We are not liable for any financial losses resulting from decisions made based on our educational content.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">7. Privacy Policy</h3>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
                to understand our practices.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">8. Governing Law</h3>
              <p>
                These Terms shall be interpreted and governed in accordance with the laws of India, 
                and you submit to the jurisdiction of the courts of Mumbai, Maharashtra for the resolution of any disputes.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">9. Changes to Terms</h3>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">10. Contact Information</h3>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <p><strong>My Equity School</strong></p>
                <p>Mehra Industrial Compound, 2nd Floor, Office No. 206,<br />
                VTM Building No.2, A K Road, Sakinaka, Mumbai,<br />
                Mumbai Suburban, Maharashtra, 400072</p>
                <p>Email: info@myequityschool.com</p>
                <p>Phone: +91-XXXX-XXXXXX</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;