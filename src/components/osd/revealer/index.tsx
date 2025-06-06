import options from 'src/configuration';
import { Gtk } from 'astal/gtk3';
import { bind } from 'astal';
import { OSDOrientation } from 'src/lib/options/types';
import { OSDBar } from '../bar';
import { revealerSetup } from '../helpers';
import { OSDIcon } from '../icon';
import { OSDLabel } from '../label';

const { orientation } = options.theme.osd;

const VerticalOsd = ({ currentOrientation }: OsdProps): JSX.Element => (
    <box vertical>
        <OSDLabel />
        <OSDBar orientation={currentOrientation} />
        <OSDIcon />
    </box>
);

const HorizontalOsd = ({ currentOrientation }: OsdProps): JSX.Element => (
    <box>
        <OSDIcon />
        <OSDBar orientation={currentOrientation} />
        <OSDLabel />
    </box>
);

export const OsdRevealer = (): JSX.Element => {
    const osdOrientation = bind(orientation).as((currentOrientation) => currentOrientation === 'vertical');

    return (
        <revealer
            transitionType={Gtk.RevealerTransitionType.CROSSFADE}
            revealChild={false}
            setup={(self) => {
                revealerSetup(self);
            }}
        >
            <box className={'osd-container'} vertical={osdOrientation}>
                {bind(orientation).as((currentOrientation) => {
                    if (currentOrientation === 'vertical') {
                        return <VerticalOsd currentOrientation={currentOrientation} />;
                    }

                    return <HorizontalOsd currentOrientation={currentOrientation} />;
                })}
            </box>
        </revealer>
    );
};

interface OsdProps {
    currentOrientation: OSDOrientation;
}
