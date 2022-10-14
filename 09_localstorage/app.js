let todoApp = {
    addTask: document.querySelector('.add'),
    list: document.querySelector('.todos'),
    search: document.querySelector('.search input'),
     // ########## 追加 ###########
    init: function() {
        // 初期化処理
        // ローカルストレージに格納されている値を取得し、リストを生成する
        for (var key in localStorage) {
            var html = localStorage.getItem(key);
            if (html) {
                todoApp.list.innerHTML += localStorage.getItem(key);
            }
        }
    },
    createTodoList: function (task) {
        // HTML テンプレートを生成
        const html = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${task}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
            `;
        todoApp.list.innerHTML += html;
        // ########## 追加 ###########
        todoApp.saveTaskToLocalStorage(task, html);
    },
 
    // ########## 追加 ###########
    saveTaskToLocalStorage: function (task, html) {
        // null は、localStorage に保存しない
        if (html) {
            // localStorage は、0 から始まる
            localStorage.setItem(task, html);
            return;
        }
        return;
    },
 
    // ########## 追加 ###########
    deleteTaskFromLocalStorage: function(task) {
        localStorage.removeItem(task);
        return;
    },
}
 
// ########## 追加 ###########
todoApp.init();
 
// イベント
todoApp.addTask.addEventListener('submit', e => {
    // デフォルトのイベントを無効
    e.preventDefault();
 
    // Taskに入力した値を空白を除外して格納
    const task = todoApp.addTask.add.value.trim();
    if(task.length) {
        // Todo List の HTML を作成
        todoApp.createTodoList(task);
 
        // ########## 追加 ###########
        // Taskに入力した文字をクリア
        todoApp.addTask.reset();
    }
});
 
// 削除機能
todoApp.list.addEventListener('click', e => {
    console.log(e.target.classList);
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
 
        // ########## 追加 ###########
        const task = e.target.parentElement.textContent.trim()
        todoApp.deleteTaskFromLocalStorage(task);
    }
});
 
/*
addEventListener("touchstart", () => {
    document.getElementById('elements').focus();
})
*/

