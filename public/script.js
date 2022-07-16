const peer = require('peerjs')

const scoket = io('/')
scoket.emit('join-room', ROOM-ID, 10)
const myPeer = new Peer(undefined, {
    host: '/',
    port: '5001'
})


scoket.on('user-connected', userId => {
    console.log('user-connected: ' +userId)
})