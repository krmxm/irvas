import checkNumInput from "./checkNumInput";

const forms = () => {
    const forms = document.querySelectorAll('form'),
          input = document.querySelectorAll('input');

    checkNumInput('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Скоро мы с вами свяжемся',
        failure: 'Ошибка'
    };

    function clearInputs() {
        input.forEach(item => {
            item.value = '';
        });
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        const res = await fetch(url, {
            method:'POST',
            body: data
        });

        return await res.text(); // ???
    };

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData (item);

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        const windows = document.querySelectorAll('[data-modal]');
                        windows.forEach(item => {
                            item.style.display = 'none';
                            document.body.style.overflow = '';
                            document.body.style.marginRight = `0px`;
                        });
                        console.log('Hi');
                    }, 5000);
                });
        });
    });
};

export default forms;