import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Last updated: January 2025
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Shield className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Your Privacy Matters</h2>
          </div>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <p>
              <strong>My Equity School</strong> ("we", "our", or "us") is committed to protecting your privacy and maintaining the confidentiality of student information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our educational services and website.
            </p>

            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
              please do not use our educational services or website.
            </p>

            <section>
              <div className="flex items-center mb-3">
                <Eye className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">1. Information We Collect</h3>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h4>
              <p>We collect personal information that you voluntarily provide when you:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Enroll in our courses or educational programs</li>
                <li>Create a student account</li>
                <li>Submit assignments or participate in assessments</li>
                <li>Contact us for support or inquiries</li>
                <li>Subscribe to our educational newsletters</li>
                <li>Participate in surveys or feedback forms</li>
              </ul>

              <p className="mt-4">This information may include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, email address, phone number, and mailing address</li>
                <li>Educational background and learning goals</li>
                <li>Payment information (processed securely by third-party processors)</li>
                <li>Course progress, grades, and assessment results</li>
                <li>Communication preferences and accessibility needs</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Automatically Collected Information</h4>
              <p>We automatically collect certain information when you use our learning platform:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Learning platform usage and navigation patterns</li>
                <li>Course completion rates and time spent on materials</li>
                <li>Device and browser information for technical support</li>
                <li>IP address for security and fraud prevention</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-3">
                <Lock className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">2. How We Use Your Information</h3>
              </div>
              
              <p>We use the information we collect for various purposes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>To deliver educational content and track learning progress</li>
                <li>To process course enrollments and manage student accounts</li>
                <li>To provide personalized learning experiences and recommendations</li>
                <li>To communicate about courses, schedules, and educational opportunities</li>
                <li>To provide student support and respond to inquiries</li>
                <li>To improve our educational programs and platform functionality</li>
                <li>To comply with educational regulations and legal requirements</li>
                <li>To maintain platform security and prevent unauthorized access</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-3">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">3. Information Sharing and Disclosure</h3>
              </div>
              
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information in the following situations:</p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-4">With Service Providers</h4>
              <p>We may share information with trusted educational and technical service providers who assist us in:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Learning management system hosting and maintenance</li>
                <li>Payment processing for course fees</li>
                <li>Educational content delivery and video hosting</li>
                <li>Student communication and support services</li>
                <li>Learning analytics and progress tracking</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Legal Requirements</h4>
              <p>We may disclose information when required by law or to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Comply with legal processes or government requests</li>
                <li>Protect our rights and property</li>
                <li>Ensure user safety</li>
                <li>Investigate fraud or security issues</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Cookies and Tracking Technologies</h3>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-blue-800">
                  <strong>Cookie Policy:</strong> We use cookies and similar technologies to enhance your learning experience and platform functionality.
                </p>
              </div>

              <p>We use the following types of cookies:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Essential Cookies:</strong> Required for learning platform functionality and security</li>
                <li><strong>Learning Analytics:</strong> Track course progress and learning outcomes</li>
                <li><strong>Preference Cookies:</strong> Remember your learning preferences and settings</li>
                <li><strong>Performance Cookies:</strong> Help us improve platform performance and user experience</li>
              </ul>

              <p className="mt-4">
                You can control cookies through your browser settings. However, disabling essential cookies may affect your ability to access course materials.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">5. Data Security</h3>
              <p>
                We implement comprehensive security measures to protect student information and educational records against unauthorized access, 
                alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>SSL encryption for all data transmission</li>
                <li>Secure cloud hosting with regular backups</li>
                <li>Multi-factor authentication for student accounts</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Staff training on student privacy and data protection</li>
                <li>Compliance with educational privacy standards</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights and Choices</h3>
              <p>As a student, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access and review your educational records and personal information</li>
                <li>Update your contact information and learning preferences</li>
                <li>Request copies of your course transcripts and certificates</li>
                <li>Opt-out of non-essential communications</li>
                <li>Request deletion of your account (subject to record retention requirements)</li>
              </ul>
              <p className="mt-4">
                To exercise these rights or discuss your privacy concerns, please contact our Student Privacy Office using the information provided below.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">7. Educational Partners and Third-Party Resources</h3>
              <p>
                Our courses may include links to external educational resources and partner websites. We are not responsible for the privacy practices 
                of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">8. Student Privacy (Under 18)</h3>
              <p>
                We welcome students of all ages in our financial literacy programs. For students under 18, we require parental consent for enrollment 
                and follow additional privacy protections. Parents have the right to review their child's educational records and can request 
                modifications to privacy settings.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">9. Changes to Privacy Policy</h3>
              <p>
                We may update this Privacy Policy to reflect changes in our educational services or legal requirements. 
                We will notify enrolled students of significant changes via email and post updates on our website with a revised "Last updated" date.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">10. Contact Information</h3>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact our Student Privacy Office:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <p><strong>My Equity School - Student Privacy Office</strong></p>
                <p>Mehra Industrial Compound, 2nd Floor, Office No. 206,<br />
                VTM Building No.2, A K Road, Sakinaka, Mumbai,<br />
                Mumbai Suburban, Maharashtra, 400072</p>
                <p>Email: privacy@myequityschool.com</p>
                <p>Phone: +91-XXXX-XXXXXX</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;