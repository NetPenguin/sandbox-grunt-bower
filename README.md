Using Grunt + Bower
----

## `$ npm install`

package.json �ε��Ҥ˽�����grunt �� grunt-bower-task �򥤥󥹥ȡ��뤹�롣
- grunt �ϥӥ�ɥġ���(make�ߤ����ʤ��)
- bower �ϥѥå����������Υġ��� (npm �� node �Υѥå��������������ɡ�bower �������������Ƥ����Τ�¿���餷��)
- grunt-bower-task �� grunt ��� bower ��¹Խ����褦�ˤ�����

## `$ grunt bower`

Gruntfile.js �ε��Ҥ˽�����bower ��������¹Ԥ��롣
- bower �������Υǥե�������꤬ install �ʤΤǡ�`grunt bower:install` ��Ʊ���äݤ�
- Gruntfile.js �� bower �Ѥ����꤬�񤤤Ƥ���
- bower.json �����Ƥ����Ѥ���(��������饤�֥��� bower.json ����󤷤Ƥ���)
- ��¸�饤�֥����ɲä������ `bower install <�饤�֥��> --save` (bower.json ���ɲä��Ƥ����)
