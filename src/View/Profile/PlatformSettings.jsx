import React, { useState } from 'react'

const PlatformSettings = () => {
  const [notifications, setNotifications] = useState({
    emailFollowers: true,
    emailAnswers: true,
    emailMentions: true
  });
  const [appNotifications, setAppNotifications] = useState({
    newLaunches: true,
    productUpdates: true,
    newsletter: true,
    weeklyMails: true
  });

  const toggleNotification = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  // Toggle function for application notifications
  const toggleAppNotification = (type) => {
    setAppNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };
  return (
    <>
      <div className="platform_settings_wrapper">
        <p className='platform_settings_heading'>Platform Settings</p>
        <div className="platform_account_settings">
          <p className="account_heading">Account</p>


          <div className="notification-list">
        {/* Follow Notification */}
        <div className="notification-item">
        <button 
            onClick={() => toggleNotification('emailFollowers')}
            className={`toggle-button ${notifications.emailFollowers ? 'active' : ''}`}
          >
            <div className="toggle-circle"></div>
          </button>
          <div className="notification-text">
            <p className="notification-title">Email me when someone follows me</p>
          </div>
        </div>

        {/* Answer Notification */}
        <div className="notification-item">
        <button 
            onClick={() => toggleNotification('emailAnswers')}
            className={`toggle-button ${notifications.emailAnswers ? 'active' : ''}`}
          >
            <div className="toggle-circle"></div>
          </button>
          <div className="notification-text">
            <p className="notification-title">Email me when someone answers on my post</p>
          </div>
        </div>

        {/* Mention Notification */}
        <div className="notification-item">
        <button 
            onClick={() => toggleNotification('emailMentions')}
            className={`toggle-button ${notifications.emailMentions ? 'active' : ''}`}
          >
            <div className="toggle-circle"></div>
          </button>
          <div className="notification-text">
            <p className="notification-title">Email me when someone mentions me</p> 
          </div>
        </div>
      </div>
        </div>

        
        <div className="platform_application_settings">
        <p className="application_heading">Application</p>


        <div className="notification-list">
        {/* Follow Notification */}
        <div className="notification-item">
        <button 
            onClick={() => toggleAppNotification('newLaunches')}
            className={`toggle-button2 ${appNotifications.newLaunches ? 'active' : ''}`}
          >
            <div className="toggle-circle"></div>
          </button>
          <div className="notification-text">
            <p className="notification-title">New launches and projects</p>
          </div>
        </div>

        {/* Answer Notification */}
        <div className="notification-item">
        <button 
                onClick={() => toggleAppNotification('productUpdates')}
                className={`toggle-button2 ${appNotifications.productUpdates ? 'active' : ''}`}
              >
                <div className="toggle-circle"></div>
              </button>
          <div className="notification-text">
            <p className="notification-title">Monthly product updates</p>
          </div>
        </div>

        {/* Mention Notification */}
        <div className="notification-item">
        <button 
                onClick={() => toggleAppNotification('newsletter')}
                className={`toggle-button2 ${appNotifications.newsletter ? 'active' : ''}`}
              >
                <div className="toggle-circle"></div>
              </button>
          <div className="notification-text">
            <p className="notification-title">Subscribe to newsletter</p> 
          </div>
        </div>


        <div className="notification-item">
        <button 
                onClick={() => toggleAppNotification('weeklyMails')}
                className={`toggle-button2 ${appNotifications.weeklyMails ? 'active' : ''}`}
              >
                <div className="toggle-circle"></div>
              </button>
          <div className="notification-text">
            <p className="notification-title">Receive mails weekly</p> 
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  )
}

export default PlatformSettings
