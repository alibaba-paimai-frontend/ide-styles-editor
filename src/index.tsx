import { Instance } from 'mobx-state-tree';
import { initSuitsFromConfig } from 'ide-lib-engine';

export * from './StylesEditor/config';
export * from './StylesEditor/';

import { StylesEditorCurrying } from './StylesEditor/';
import { configStylesEditor } from './StylesEditor/config';

const {
    ComponentModel: StylesEditorModel,
    NormalComponent: StylesEditor,
    ComponentHOC: StylesEditorHOC,
    ComponentAddStore: StylesEditorAddStore,
    ComponentFactory: StylesEditorFactory
} = initSuitsFromConfig(StylesEditorCurrying,configStylesEditor);

export {
    StylesEditorModel,
    StylesEditor,
    StylesEditorHOC,
    StylesEditorAddStore,
    StylesEditorFactory
};

export interface IStylesEditorModel extends Instance<typeof StylesEditorModel> { }
