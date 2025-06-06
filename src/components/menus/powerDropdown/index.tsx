import { bind } from 'astal';
import DropdownMenu from '../shared/dropdown/index.js';
import { PowerButton } from './button.js';
import options from 'src/configuration';
import { RevealerTransitionMap } from 'src/components/settings/constants.js';

export default (): JSX.Element => {
    return (
        <DropdownMenu
            name="powerdropdownmenu"
            transition={bind(options.menus.transition).as((transition) => RevealerTransitionMap[transition])}
        >
            <box className={'menu-items power-dropdown'}>
                <box className={'menu-items-container power-dropdown'} vertical hexpand>
                    {PowerButton('shutdown')}
                    {PowerButton('reboot')}
                    {PowerButton('logout')}
                    {PowerButton('sleep')}
                </box>
            </box>
        </DropdownMenu>
    );
};
