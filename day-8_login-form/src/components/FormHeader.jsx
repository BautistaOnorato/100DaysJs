const FormHeader = ({ page }) => {
  return (
    <div className={`form-header`}>
      <div className="step">Step 1</div>
      <div className="step">Step 2</div>
      <div className="step">Step 3</div>
      { page !== 3 && <div className="progress-bar" style={{ width: page === 1 ? '66.6%' : '33.3%' }} /> }
    </div>
  )
}

export default FormHeader