function useWebSocket(messageHandler, openHandler) {
	const url = import.meta.env.VITE_WEBSOCKET_SERVER;
	const ws = new WebSocket(url);

	const init = () => {
		bindEvent();
	}

	function bindEvent() {
		ws.addEventListener('open', openHandler);
		ws.addEventListener('close', closeHandler);
		ws.addEventListener('drror', errorHandler);
		ws.addEventListener('message', messageHandler);
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