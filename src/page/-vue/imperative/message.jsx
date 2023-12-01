// import Message from './Message.vue';
import {createApp} from 'vue';
import {styled} from '@styils/vue';

const DivImperative = styled('div', {
	position: 'fixed',
	left: 0,
	top: 0,
	width: '100vw',
	height: '100vh',
	zIndex: 9999999,
	background: 'rgba(0,0,0,.5)',
})

const DivMessage = styled('div', {
	position: 'absolute',
	left: '50%',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	background: '#fff',
	borderRadius: '4px',
	width: '400px',
	textAlign: 'center',
	padding: '30px 0',
})

const DivTitle = styled('div', {
	marginBottom: '20px',
	fontSize: '18px'
})

const DivSubmit = styled('div', {
	background: '#409eff',
	border: 'none',
	color: '#fff',
	padding: '8px 20px',
	borderRadius: '4px',
	cursor: 'pointer',
	display: 'inline-block',
	'active': {
		background: '#79bbff'
	}
})

const MessageBox = {
	props: {
		title: {
			type: String,
			default: ''
		}
	},
	render(ctx) {
		const { $props, $emit } = ctx;
		return (
			<DivImperative>
				<DivMessage>
					<DivTitle>{ $props.title }</DivTitle>
					<DivSubmit onClick={() => {$emit('clear')}}>确 定</DivSubmit>
				</DivMessage>
			</DivImperative>
		)
	}
};

function message(title, callback) {
	const div = document.createElement('div')
	document.body.appendChild(div);
	const app = createApp(MessageBox, {
		title,
		onClear() {
			console.log('clear');
			callback && callback(() => {
				app.unmount(div);
				div.remove();
			});
		}
	});
	app.mount(div);
}

export default message;