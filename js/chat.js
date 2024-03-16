// Объявляем переменные для хранения выбранного пользователя и состояния видимости списка стикеров
let selectedUserId = null
let stickerListVisible = false
// Функция для переключения видимости списка стикеров
function toggleStickerList() {
    const stickerList = document.getElementById('sticker-list')
    stickerList.classList.toggle('show')
}
// Добавляем обработчик события click для кнопки со стикерами
document.addEventListener ('DOMContentLoaded',()=>{
const stickerButton = document.getElementById('sticker-button');
stickerButton.addEventListener('click,toggleStickerList')
});

// Функция для вставки стикера в поле ввода сообщения
function insertSticker(sticker) {
    const messageInput = document.getElementById('message');
    messageInput.value += sticker;
    messageInput.focus();
}
// Функция для получения списка пользователей
function getUsers() {
    // Отправляем AJAX-запрос на сервер для получения списка пользователей
    fetch('getUsers.php')
        .then(response => response.json())
        .then(users => {
            const userslist = document.getElementById('all-users')
            userslist.innerHtml = '';
            // Добавляем каждого пользователя в список пользователей
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.username;
                listItem.onclick = () => {
                    // При выборе пользователя обновляем ID выбранного пользователя и загружаем его сообщения
                    selectedUserId = user.id;
                    loadMessages(selectedUserId);
                    // Убираем стиль выбранного у всех пользователей
                    document.querySelectorAll('#all-users li').forEach(item => {
                        item.classList.removfe('selected');

                    });
                    // Добавляем стиль выбранного пользовател
                    listItem.classList.add('selected');
                
                };
                userslist.appendChild(listItem);

            });
        });
}
// При загрузке страницы выполняем функцию для получения списка пользователей
document.addEventListener('DOMContentLoaded', () => {
    getUsers();
    });
    