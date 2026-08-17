fetch('./projects.json')
  .then((r) => r.json())
  .then((data) => {
    document.getElementById('avatar').src = data.owner.avatar;
    document.getElementById('owner-name').textContent = data.owner.name;
    document.getElementById('owner-tagline').textContent = data.owner.tagline;

    const social = document.getElementById('social');
    data.social.forEach((s) => {
      const a = document.createElement('a');
      a.href = s.url; a.textContent = s.label; a.target = '_blank'; a.rel = 'noopener';
      social.appendChild(a);
    });

    const grid = document.getElementById('projects');
    data.projects.forEach((p) => {
      const card = document.createElement('a');
      card.className = 'card';
      card.href = p.url;
      card.innerHTML =
        `<img class="cover" src="${p.cover}" alt="${p.title}" />` +
        `<div class="body"><h3>${p.title}</h3><p>${p.desc}</p></div>`;
      grid.appendChild(card);
    });

    const upd = document.getElementById('updates');
    const ul = document.createElement('ul');
    data.updates.forEach((u) => {
      const li = document.createElement('li');
      li.textContent = `${u.date} · ${u.text}`;
      ul.appendChild(li);
    });
    upd.appendChild(ul);

    document.getElementById('year').textContent = new Date().getFullYear();
  })
  .catch((e) => {
    console.error('加载 projects.json 失败', e);
  });
