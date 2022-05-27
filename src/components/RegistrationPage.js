import React from 'react'
import RegistrationForm from './RegistrationForm'

function RegistrationPage({submitionDone,setSubmitionDone, submittedLatLng, setSubmittedLatLng, setShowLocSubmit, showLocSubmit}) {
    return (
        <div className="p-4 snapper" id="scrollAid2">
        {!submitionDone ? (
          <RegistrationForm
            setSubmitionDone={setSubmitionDone}
            submittedLatLng={submittedLatLng}
            setSubmittedLatLng={setSubmittedLatLng}
            showLocSubmit={showLocSubmit}
            setShowLocSubmit={setShowLocSubmit}
          />
        ) : (
          <div className="p-4 text-center">
            تم التسجيل بنجاح سيتم التواصل معك من قبل الفريق بأقرب وقت
          </div>
        )}
      </div>
    )
}

export default RegistrationPage
