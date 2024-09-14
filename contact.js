/*form sectionn*/ 

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_zlvfsck";
    const templateID = "template_ncl0mda";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  


  // Define styles in JavaScript
const styles = {
    containerCustom: {
      border: '1px solid #dee2e6',
      marginTop: '1rem',
      backgroundColor: '#f8f9fa'
    },
    firstColumn: {
      padding: '3rem',
      backgroundColor: '#007bff',
      color: '#fff'
    },
    secondColumn: {
      borderLeft: '1px solid #dee2e6',
      padding: '1rem'
    },
    h1: {
      fontSize: '2rem' // Adjust as needed
    },
    h4: {
      fontSize: '1.25rem' // Adjust as needed
    },
    formGroup: {
      marginBottom: '1rem'
    },
    h5: {
      marginBottom: '0.5rem'
    },
    formControl: {
      display: 'block',
      width: '100%',
      padding: '0.375rem 0.75rem',
      fontSize: '1rem',
      lineHeight: '1.5',
      color: '#495057',
      backgroundColor: '#fff',
      border: '1px solid #ced4da',
      borderRadius: '0.25rem',
      boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.075)',
      transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
    },
    formControlFocus: {
      borderColor: '#80bdff',
      outline: '0',
      boxShadow: '0 0 0 0.2rem rgba(38, 143, 255, 0.25)'
    },
    btnPrimary: {
      backgroundColor: '#007bff',
      borderColor: '#007bff'
    },
    btnPrimaryHover: {
      backgroundColor: '#0069d9', // Darker shade for hover
      borderColor: '#0062cc'
    }
  };
  
  // Apply styles to elements
  window.onload = function() {
    const container = document.querySelector('.container-custom');
    const firstColumn = container.querySelector('.col-md-6:first-child');
    const secondColumn = container.querySelector('.col-md-6:nth-child(2)');
    const formControls = container.querySelectorAll('.form-control');
    const button = container.querySelector('.btn-primary');
  
    // Apply container styles
    Object.assign(container.style, styles.containerCustom);
  
    // Apply first column styles
    Object.assign(firstColumn.style, styles.firstColumn);
  
    // Apply second column styles
    Object.assign(secondColumn.style, styles.secondColumn);
  
    // Apply heading styles
    const headings = container.querySelectorAll('h1, h4');
    headings.forEach(heading => {
      if (heading.tagName === 'H1') {
        Object.assign(heading.style, styles.h1);
      } else if (heading.tagName === 'H4') {
        Object.assign(heading.style, styles.h4);
      }
    });
  
    // Apply form group styles
    const formGroups = container.querySelectorAll('.form-group');
    formGroups.forEach(group => {
      Object.assign(group.style, styles.formGroup);
    });
  
    // Apply label styles
    const labels = container.querySelectorAll('.form-group h5');
    labels.forEach(label => {
      Object.assign(label.style, styles.h5);
    });
  
    // Apply form control styles
    formControls.forEach(control => {
      Object.assign(control.style, styles.formControl);
      control.addEventListener('focus', () => {
        Object.assign(control.style, styles.formControlFocus);
      });
      control.addEventListener('blur', () => {
        Object.assign(control.style, styles.formControl);
      });
    });
  
    // Apply button styles
    Object.assign(button.style, styles.btnPrimary);
    button.addEventListener('mouseover', () => {
      Object.assign(button.style, styles.btnPrimaryHover);
    });
    button.addEventListener('mouseout', () => {
      Object.assign(button.style, styles.btnPrimary);
    });
  };
  