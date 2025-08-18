import { NgDocPage } from '@ng-doc/core';
import GettingStartedCategory from '../ng-doc.category';
import { NzxCheckboxGroupExampleComponent } from './demos/checkbox-group/checkbox-group.component';

const InstallationPage: NgDocPage = {
  title: '多选框',
  mdFile: ['./index.md','./demo.md'],
  category: GettingStartedCategory,
  demos:{NzxCheckboxGroupExampleComponent}
};

export default InstallationPage;
