import React from 'react';

export const Alert = ({alert}) => (
  <>
    <div className="alert alert-danger mt-3" role="alert">
      {alert}
    </div>
  </>
)