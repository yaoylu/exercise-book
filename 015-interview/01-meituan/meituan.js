/*
 * @Description:
 * @Author: alysalu@tencent.com
 * @Date: 2022-03-02 14:54:11
 */
const mainMenus = [{
  id: 5,
  level: 1,
  menus: [{
    id: 257,
    level: 2,
    menus: [{
      id: 1044,
      level: 3,
      menus: [],
      parentId: 257,
      title: '三级菜单-1-1-1',
    },
    {
      id: 1170,
      level: 3,
      menus: [],
      parentId: 257,
      title: '三级菜单-1-1-2',
    },
    ],
    parentId: 5,
    title: '二级菜单-1-1',
  }],
  parentId: -1,
  title: '一级菜单-1',
},
{
  id: 1,
  level: 1,
  menus: [{
    id: 7,
    level: 2,
    menus: [{
      id: 55,
      level: 3,
      menus: [],
      parentId: 7,
      title: '三级菜单-2-1-1',
    }],
    parentId: 1,
    title: '二级菜单-2-1',
  }],
  parentId: -1,
  title: '一级菜单-2',
},
];

function addNewMenus(menus, id, level, parentId, title) {
  for (let i = 0; i < menus.length; i++) {
    addNewMenus(menus[i].menus, Math.ceil(Math.random() * 1000), level + 1, menus[i].id, `${menus[i].title}-${menus[i].menus.length + 1}`);
  }
  const newItem = {
    id,
    level,
    menus: [],
    parentId,
    title,
  };
  menus.push(newItem);
}

addNewMenus(mainMenus, 6, 1, -1, '一级菜单-3');
console.log(mainMenus);
