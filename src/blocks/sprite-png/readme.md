Из файлов `sprite-png/png/` генерируется файл спрайта `sprite-png/img/sprite-ЧИСЛОВОЙ_ИНДЕКС.svg`.

<p class="alert  alert--warning">Блок не имеет классов, упоминаемых в разметке. Чтобы взять его в сборку, упомяните <code>sprite-png</code> в <code>config.js#alwaysAddBlocks</code>.</p>

**Стилевой файл блока генерируется автоматически** и содержит примеси для использования спрайтов.

Пример использования для конкретного селектора:

<pre class="code">
  <code>.selector {</code>
  <code>  @include sprite($icon-left); // $icon-left — $ИМЯ-ФАЙЛА-КАРТИНКИ</code>
  <code>}</code>
</pre>


**Размеры иконок в спрайте:

cardio-white  51x33
cardio-white-large 114x74  2.23
cardio-white-xl 174x201  3.4

combat-white 33x48
combat-white-large 90x121 2.7
combat-white-xl 138x201 4 !!!


fintess-white 44x58
fitness-white-large 90x121 2
fitness-white-xl 135x180 3

freeze-white 31x49
freeze-white-large 96x152 3
freeze-white-xl 246x390 !!! 7.9 !!!
надо 124x


group-white 62x36
group-white-large 128x72 2
group-white-xl 196x110 3.1



