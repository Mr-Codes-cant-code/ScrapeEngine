const copy_pip_i_bs4_requests = document.getElementById('copy-pip-i-bs4-requests');
const code_pip_i_bs4_requests = document.getElementById('pip-i-bs4-requests');

const copy_getting_started = document.getElementById('copy-getting-started');
const code_getting_started = document.getElementById('getting-started-code')

const copy_get_getall_example = document.getElementById('copy-get-getall-example');
const code_get_getall_example = document.getElementById('get-getall-example');

const copy_get_ele_nm_example = document.getElementById('copy-get-ele-nm-example');
const code_get_ele_nm_example = document.getElementById('get-ele-nm-example');

const copy_gethref_getallhref_function_special = document.getElementById('copy-gethref-getallhref-function-special');
const code_gethref_getallhref_function_special = document.getElementById('gethref-getallhref-function-special');

const copy_get_head_example = document.getElementById('copy-get-head-example');
const code_get_head_example = document.getElementById('get-head-example')

const copy_get_attr_example = document.getElementById('copy-get-attr-example');
const code_get_attr_example = document.getElementById('get-attr-example')

copy_get_attr_example.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  textArea.value = code_get_attr_example.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  changeOpacity('get-attr-example')
});

copy_get_head_example.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  textArea.value = code_get_head_example.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  changeOpacity('get-head-example')
});

copy_get_ele_nm_example.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  textArea.value = code_get_ele_nm_example.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  changeOpacity('get-ele-nm-example')
});

copy_gethref_getallhref_function_special.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  textArea.value = code_gethref_getallhref_function_special.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  changeOpacity('gethref-getallhref-function-special')
});

copy_gethref_getallhref_function_special.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  textArea.value = code_gethref_getallhref_function_special.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  changeOpacity('gethref-getallhref-function-special')
});

copy_pip_i_bs4_requests.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  textArea.value = code_pip_i_bs4_requests.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  changeOpacity('pip-i-bs4-requests')
});

copy_getting_started.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  textArea.value = code_getting_started.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  changeOpacity('getting-started')
});


copy_get_getall_example.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  textArea.value = code_get_getall_example.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  changeOpacity('get-getall-example')
});

function changeOpacity(id) {
  const message_copied  = document.getElementById('cp-' + id);
  const copy_btn = document.getElementById('copy-' + id)

  message_copied.style.transform = 'translateX(0px)'
  copy_btn.style.transition = '200ms'
  message_copied.style.transition = '100ms';
  
  setTimeout(() => {
    message_copied.style.opacity = 0.8;
    copy_btn.style.opacity = 0;
  }, 200);

  setTimeout(() => {
    copy_btn.style.opacity = 1;
    message_copied.style.opacity = 0;
    setTimeout(() => {
      message_copied.style.transform = 'translateX(-100px)'
    }, 200);
  }, 1500);

}

function attr_collect_subt_show() {
  const btn = document.getElementById('attribute-collectors');
  btn.style.transform = "rotate(90deg)";
  alert('yes')

}