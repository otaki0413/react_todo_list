function App() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="mx-auto my-8 max-w-xl space-y-8 rounded-2xl bg-white p-5">
        {/* アプリタイトル */}
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Todoリスト
        </h1>

        {/* Todoステータスエリア */}
        <div className="grid grid-cols-3 gap-2">
          {/* ステータスボックス */}
          <div className="rounded-lg border border-gray-300 p-4 text-center">
            <div className="mb-2">すべてのタスク</div>
            <div className="text-2xl font-bold text-blue-600">1</div>
          </div>
          <div className="rounded-lg border border-gray-300 p-4 text-center">
            <div className="mb-2">完了</div>
            <div className="text-2xl font-bold text-blue-600">1</div>
          </div>
          <div className="rounded-lg border border-gray-300 p-4 text-center">
            <div className="mb-2">未完了</div>
            <div className="text-2xl font-bold text-blue-600">1</div>
          </div>
        </div>

        {/* フォームエリア */}
        <div className="rounded-lg">
          <form className="flex gap-4">
            <input
              type="text"
              placeholder="新しいTodoを入力..."
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-lg border-none bg-blue-500 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-600"
            >
              追加
            </button>
          </form>
        </div>

        {/* Todoリストエリア */}
        <div>
          <ul className="list-none space-y-3">
            <li className="flex items-center gap-x-4 border-b-1 border-b-gray-300 py-4">
              <input type="checkbox" />
              <span className="line-clamp-2 flex-1">aaa</span>
              <div className="flex gap-x-2">
                <button className="cursor-pointer rounded-lg border-none bg-gray-500 px-4 py-2 font-bold text-white">
                  編集
                </button>
                <button className="cursor-pointer rounded-lg border-none bg-green-500 px-4 py-2 font-bold text-white">
                  保存
                </button>
                <button className="cursor-pointer rounded-lg border-none bg-orange-500 px-4 py-2 font-bold text-white">
                  削除
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
