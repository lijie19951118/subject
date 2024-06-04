function useWebSocket(messageHandler) {
	const url = import.meta.env.VITE_WEBSOCKET_SERVER;
	const ws = new WebSocket(url);
	const userName = localStorage.getItem("userName");

	const init = () => {
		bindEvent();
	}

	function bindEvent() {
		ws.addEventListener('open', openHandler);
		ws.addEventListener('close', closeHandler);
		ws.addEventListener('drror', errorHandler);
		ws.addEventListener('message', messageHandler);
	}

	function openHandler() {
		console.log('————————连接成功——————')
		const data = {
			time: new Date().getTime(),
			userName,
			message: `${userName}进入聊天室`,
			mode: "INTO",
		};
		ws.send(JSON.stringify(data));
	}

	function closeHandler() {
		console.log('————————连接关闭——————')
	}

	function errorHandler(error) {
		console.log('————————连接报错——————', error)
		ElMessageBox.alert('连接超时', '提示', {
			callback: () => {
				console.log(1)
			},
		})
	}

	init();

	return ws;
}

export default useWebSocket;