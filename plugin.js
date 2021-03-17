export default class CharSwapMod {
  prestart() {
    this.keymap = new Map([
      ['Lea', ig.KEY.T],
      ['Emilie', ig.KEY.Y],
      ['Glasses', ig.KEY.U],
      ['Schneider', ig.KEY.I],
      ['Apollo', ig.KEY.O],
      ['Joern', ig.KEY.P],
      ['Shizuka', ig.KEY.G],
      ['Hlin', ig.KEY.H],
      ['Grumpy', ig.KEY.J],
      ['Buggy', ig.KEY.K],
      ['Sergey', ig.KEY.L],
      ['Triblader1', ig.KEY.N],
    ]);
  }

  main() {
    ig.input.bind(ig.KEY.ALT, 'swap_char');
    for (const name of sc.PARTY_OPTIONS) {
      const binding = this.keymap.get(name);
      if (binding != null) ig.input.bind(binding, `swap_${name}`);
    }

    ig.game.addons.preUpdate.push(this);
  }

  onPreUpdate() {
    if (!ig.input.state('swap_char')) return;

    for (const name of this.keymap.keys()) {
      if (ig.input.pressed(`swap_${name}`)) {
        sc.model.player.setConfig(sc.party.models[name].config);
        break;
      }
    }
  }
}
