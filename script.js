const previewBtn = document.getElementById('previewBtn');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('bookingForm');

previewBtn.addEventListener('click', function() {
  form.querySelectorAll('.form-control').forEach(el => el.classList.remove('is-invalid'));

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const datetime = document.getElementById('datetime');

  let valid = true;

  if (name.value.trim() === '') {
    name.classList.add('is-invalid'); valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    email.classList.add('is-invalid'); valid = false;
  }

  const phoneRegex = /^[0-9]{9,11}$/;
  if (!phoneRegex.test(phone.value)) {
    phone.classList.add('is-invalid'); valid = false;
  }

  if (datetime.value === '') {
    datetime.classList.add('is-invalid'); valid = false;
  }

  if (valid) {
    document.getElementById('confirmName').innerText = name.value;
    document.getElementById('confirmEmail').innerText = email.value;
    document.getElementById('confirmPhone').innerText = phone.value;
    document.getElementById('confirmDatetime').innerText = datetime.value;

    const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
    modal.show();
  }
});

submitBtn.addEventListener('click', function() {
  alert('Đặt bàn thành công!');
  const modalEl = document.getElementById('confirmModal');
  const modal = bootstrap.Modal.getInstance(modalEl);
  modal.hide();
  form.reset();
});
