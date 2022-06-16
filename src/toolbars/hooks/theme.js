/**
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import MenuBase from '@/toolbars/MenuBase';
/**
 * 设置编辑器主题
 */
export default class Theme extends MenuBase {
  constructor(editor) {
    super(editor);
    this.setName('theme');
    this.updateMarkdown = false;
    this.subMenuConfig = [
      { noIcon: true, name: 'default', onclick: this.bindSubClick.bind(this, 'default') },
      { noIcon: true, name: 'monokai', onclick: this.bindSubClick.bind(this, 'monokai') },
    ];
  }

  /**
   * 响应点击事件
   * @param {string} shortKey 快捷键参数，本函数不处理这个参数
   * @param {string} theme 具体的代码块主题
   * @returns 回填到编辑器光标位置/选中文本区域的内容
   */
  onClick(shortKey = '', theme) {
    document.querySelector('.cherry').setAttribute('data-theme', theme);
  }
}
