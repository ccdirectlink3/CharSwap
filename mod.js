export default class BasicMod extends Plugin {
    
    main() {
        ig.input.bind(ig.KEY.ALT, 'swap_char');
        ig.input.bind(ig.KEY.T, 'swap_lea');
        ig.input.bind(ig.KEY.Y, 'swap_emilie');
        ig.input.bind(ig.KEY.U, 'swap_glasses');
        ig.input.bind(ig.KEY.I, 'swap_schneider');
        ig.input.bind(ig.KEY.O, 'swap_apollo');
        ig.input.bind(ig.KEY.P, 'swap_joern');
        ig.input.bind(ig.KEY.G, 'swap_shizuka');
        ig.input.bind(ig.KEY.H, 'swap_hlin');
        ig.input.bind(ig.KEY.J, 'swap_grumpy');
        ig.input.bind(ig.KEY.K, 'swap_buggy');
        ig.input.bind(ig.KEY.L, 'swap_sergey');
        ig.input.bind(ig.KEY.N, 'swap_triblader1');
        ig.game.addons.preUpdate.push(this);
    }
    
    onPreUpdate() {
		if (ig.input.state('swap_char')) {
            if(ig.input.state('swap_lea')) new ig.EVENT_STEP.SWITCH_PLAYER_CONFIG({name: 'Lea'}).start();
            else if(ig.input.state('swap_emilie')) new ig.EVENT_STEP.SWITCH_PLAYER_CONFIG({name: 'Emilie'}).start();
            else if(ig.input.state('swap_glasses')) new ig.EVENT_STEP.SWITCH_PLAYER_CONFIG({name: 'Glasses'}).start();
            else if(ig.input.state('swap_schneider')) new ig.EVENT_STEP.SWITCH_PLAYER_CONFIG({name: 'Schneider'}).start();
            else if(ig.input.state('swap_apollo')) new ig.EVENT_STEP.SWITCH_PLAYER_CONFIG({name: 'Apollo'}).start();
            else if(ig.input.state('swap_joern')) new ig.EVENT_STEP.SWITCH_PLAYER_CONFIG({name: 'Joern'}).start();
            else if(ig.input.state('swap_shizuka')) new ig.EVENT_STEP.SWITCH_PLAYER_CONFIG({name: 'Shizuka'}).start();
            else if(ig.input.state('swap_hlin')) new ig.EVENT_STEP.SWITCH_PLAYER_CONFIG({name: 'Hlin'}).start();
            else if(ig.input.state('swap_grumpy')) new ig.EVENT_STEP.SWITCH_PLAYER_CONFIG({name: 'Grumpy'}).start();
            else if(ig.input.state('swap_buggy')) new ig.EVENT_STEP.SWITCH_PLAYER_CONFIG({name: 'Buggy'}).start();
            else if(ig.input.state('swap_sergey')) new ig.EVENT_STEP.SWITCH_PLAYER_CONFIG({name: 'Sergey'}).start();
            else if(ig.input.state('swap_triblader1')) new ig.EVENT_STEP.SWITCH_PLAYER_CONFIG({name: 'Triblader1'}).start();
		}
	}
}