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

### Gruntfile.js

#### `bower.install.options`

- targetDir: bower �Ǽ������줿�ѥå������� main �˵��Ҥ���Ƥ���ե�����Υ��ԡ���(�Υ롼�ȥǥ��쥯�ȥ�). main �˽񤫤�Ƥ���ΤȰ㤦�ե�����򥳥ԡ�������� bower.json �� exportsOverride �����ꤹ��
- layout: byType (�ǥե����) or byComponent or �������ࡣ�ե�����μ���ǥǥ��쥯�ȥ��ʬ���뤫������ݡ��ͥ��̾�ǥǥ��쥯�ȥ��ʬ���뤫
- cleanTargetDir: ���ԡ���ǥ��쥯�ȥ��õ�Ƥ��饳�ԡ����뤫�ɤ���.�ޤ�äȾä���롣


## ����

http://yosuke-furukawa.hatenablog.com/entry/2013/06/04/085537 �����ˤ狼��䤹���ä���