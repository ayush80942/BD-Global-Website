import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../commonComponents/Navbar/Navbar';
import { Assets } from '../../assets/assets';
import Button from '../commonComponents/Button/Button';

const HeroSection = () => {
  const defaultDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  }, []);

  const [showDialog, setShowDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [meetingDate, setMeetingDate] = useState(defaultDate);
  const [meetingTime, setMeetingTime] = useState('10:00');
  const [duration, setDuration] = useState(30);
  const [error, setError] = useState('');

  const handleConsultationClick = () => {
    setError('');
    setShowDialog(true);
  };

  const handleSendInvite = (e) => {
    e.preventDefault();
    const emailPattern = /[^@\s]+@[^@\s]+\.[^@\s]+/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!meetingDate || !meetingTime) {
      setError('Please choose a date and time.');
      return;
    }

    const [hour, minute] = meetingTime.split(':').map(Number);
    const [year, month, day] = meetingDate.split('-').map(Number);
    const startDate = new Date(year, month - 1, day, hour, minute, 0, 0);
    const endDate = new Date(startDate.getTime() + Number(duration) * 60 * 1000);

    const fmt = (d) => d.toISOString().replace(/[-:]|\.\d{3}/g, '');
    const start = fmt(startDate);
    const end = fmt(endDate);

    const title = encodeURIComponent('BD Global | Free Consultation');
    const details = encodeURIComponent(
      'We will confirm the agenda and share a Google Meet link. If this time does not work, reply with your preference.'
    );
    const location = encodeURIComponent('Google Meet (link will be added on send)');
    const guest = encodeURIComponent(email.trim());
    const host = encodeURIComponent('chiragkhanna0516@gmail.com');

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}&add=${guest}&add=${host}`;

    window.open(calendarUrl, '_blank', 'noopener');
    setShowDialog(false);
    setEmail('');
    setMeetingDate(defaultDate);
    setMeetingTime('10:00');
    setDuration(30);
    setError('');
  };

  return (
    <div className="relative bg-linear-to-r from-slate-800 via-teal-700 to-emerald-400 py-6">
      {/* Background overlay with business people silhouette effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0">
        <img src={Assets.BgImgae} alt="Background" className="object-cover w-full h-full opacity-70" />
      </div>

      {/* Header integrated within Home */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center pt-32 pb-12">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
          A Fully Managed Business Backend {' '}
          <br />
          <span className="text-orange-400">So You Can Focus on Growth</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-200 mb-12 max-w-3xl leading-relaxed font-light">
          BD Global Services operates as your extended business operations team, managing accounting, compliance, HR, legal, MIS, technology and financial planning — with AI-assisted systems and qualified professionals ensuring accuracy, speed and reliability.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <Button children="Get a Proposal" onClick={() => window.location.href = "/contact"} />

          <Link
            to="/pricing"
            className="border border-white text-white px-6 py-3 rounded-md text-sm font-semibold 
               hover:bg-white hover:text-black transition-all duration-300 ease-in-out 
               flex items-center justify-center shadow-lg"
          >
            View Pricing
          </Link>

          <button
            type="button"
            onClick={handleConsultationClick}
            className="border border-white text-white px-6 py-3 rounded-md text-sm font-semibold 
               hover:bg-white hover:text-black transition-all duration-300 ease-in-out 
               flex items-center justify-center shadow-lg"
          >
            Book Free Consultation
          </button>
        </div>


        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center">
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">500+</div>
            <div className="text-xs md:text-sm text-gray-200 font-medium">Happy Clients</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">15+</div>
            <div className="text-xs md:text-sm text-gray-200 font-medium">Years Experience</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-xs md:text-sm text-gray-200 font-medium">Qualified Professionals</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-xs md:text-sm text-gray-200 font-medium">WhatsApp Support</div>
          </div>
        </div>
      </div>

      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black bg-opacity-60" onClick={() => setShowDialog(false)} />
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6 z-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Send calendar invite</h3>
            <p className="text-sm text-gray-600 mb-4">
              Enter the email address to receive a Google Calendar invite. You will be prompted to confirm the event in Google Calendar and add the Meet link.
            </p>
            <div className="rounded-md overflow-hidden border border-gray-200 mb-4">
              <iframe
                title="BD Global Calendar"
                src="https://calendar.google.com/calendar/embed?src=chiragkhanna0516%40gmail.com&ctz=Asia%2FKolkata"
                style={{ border: 0 }}
                className="w-full h-64 md:h-80"
                frameBorder="0"
                scrolling="no"
              />
            </div>
            <form onSubmit={handleSendInvite} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label htmlFor="consult-date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    id="consult-date"
                    type="date"
                    value={meetingDate}
                    min={defaultDate}
                    onChange={(e) => setMeetingDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="consult-time" className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <input
                    id="consult-time"
                    type="time"
                    value={meetingTime}
                    onChange={(e) => setMeetingTime(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    step="900"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label htmlFor="consult-duration" className="block text-sm font-medium text-gray-700 mb-1">
                    Duration
                  </label>
                  <select
                    id="consult-duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value={15}>15 minutes</option>
                    <option value={30}>30 minutes</option>
                    <option value={45}>45 minutes</option>
                    <option value={60}>60 minutes</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="consult-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  id="consult-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="you@example.com"
                  required
                />
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              </div>
              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowDialog(false)}
                  className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-md shadow"
                >
                  Send Invite
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;