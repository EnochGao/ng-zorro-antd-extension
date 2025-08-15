import { NgDocPage } from '@ng-doc/core';
import GettingStartedCategory from './ng-doc.category';

/**
 * @status:info 新
 *
 * This page describes how to install the library.
 */
const InstallationPage: NgDocPage = {
  title: 'acl',
  mdFile: ['./index.md', './zh-cn.md'],
  category: GettingStartedCategory,
};

export default InstallationPage;
