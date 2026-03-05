---
created: 2025-01-17
updated: 2025-01-17
---
# k8s磁盘占用过高

84%占用。

```
root@aks-agentpool-20049210-vmss000005:/# df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            7.8G     0  7.8G   0% /dev
tmpfs           1.6G  2.3M  1.6G   1% /run
/dev/sdc1        97G   82G   16G  84% /
tmpfs           7.9G     0  7.9G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           7.9G     0  7.9G   0% /sys/fs/cgroup
/dev/sdc15      105M  4.4M  100M   5% /boot/efi
/dev/sda1        32G   36K   30G   1% /mnt
tmpfs           250M  8.0K  250M   1% /var/lib/kubelet/pods/b84f3980-b1fb-4f41-abe6-db1400631341/volumes/kubernetes.io~projected/azure-ip-masq-agent-config-volume
tmpfs           1.8G     0  1.8G   0% /var/lib/kubelet/pods/5f04913f-054b-462a-a823-f0d27e008298/volumes/kubernetes.io~secret/ama-logs-adx-secret
tmpfs           1.8G   12K  1.8G   1% /var/lib/kubelet/pods/5f04913f-054b-462a-a823-f0d27e008298/volumes/kubernetes.io~secret/ama-logs-secret
tmpfs           1.8G   12K  1.8G   1% /var/lib/kubelet/pods/5f04913f-054b-462a-a823-f0d27e008298/volumes/kubernetes.io~projected/kube-api-access-7684h
tmpfs           100M   12K  100M   1% /var/lib/kubelet/pods/17240872-3122-42f4-a56a-b872df4eddf2/volumes/kubernetes.io~projected/kube-api-access-kgclg
tmpfs           600M   12K  600M   1% /var/lib/kubelet/pods/bce507b0-a21a-4f0e-b3e5-a49c558853ed/volumes/kubernetes.io~projected/kube-api-access-7rfhl
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/4f954e8efc64fbf0593de3596eeeff26082bba780d6f30c8bff8446966c05c21/shm
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/4f954e8efc64fbf0593de3596eeeff26082bba780d6f30c8bff8446966c05c21/rootfs
tmpfs            13G   12K   13G   1% /var/lib/kubelet/pods/eecab056-9a6f-4034-85da-8b87de20d57f/volumes/kubernetes.io~projected/kube-api-access-tzft6
tmpfs           250M   12K  250M   1% /var/lib/kubelet/pods/b84f3980-b1fb-4f41-abe6-db1400631341/volumes/kubernetes.io~projected/kube-api-access-t9nqm
tmpfs           512M   12K  512M   1% /var/lib/kubelet/pods/c3a586b5-2d0a-46b9-a2de-5c80ee207d1c/volumes/kubernetes.io~projected/kube-api-access-dnx4s
tmpfs           400M   12K  400M   1% /var/lib/kubelet/pods/953eba34-e28e-4559-963e-b696a47584c5/volumes/kubernetes.io~projected/kube-api-access-wgx2h
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/6170df6f6b0a34b00591c5da1b5968c0f6448da359599ff713a6b2aa011babb2/rootfs
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/1a64b937e7f087bfc75597da2207371e6666acac31143c11e29a5f999a3d039a/shm
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/1a64b937e7f087bfc75597da2207371e6666acac31143c11e29a5f999a3d039a/rootfs
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/cab535782b3b2bc4fca5c53db112edbc3d2d40890a794f1e9b127a33ed790066/rootfs
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/9c55bdb99a6fc5d1995ca3814277cd744f2da850a803fa5836fdc39d9dd1a90b/rootfs
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/73280cf814eae2ef02f01b326ad22534033213ce32df00a943b114daad543e8d/rootfs
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/70011ae9291b5c1efdfb46e2f0fc05ae88822a13e12ddb76cb48b5b048433d32/rootfs
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/84ac43c7001e3fc7c9e61e22b8d8544f229ab53731640a58a0e5dec15af11357/rootfs
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/a1a067400c75bffe839418c1fe254900834452727118d191fd5db00e1b069db2/shm
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/a1a067400c75bffe839418c1fe254900834452727118d191fd5db00e1b069db2/rootfs
tmpfs           954M   12K  954M   1% /var/lib/kubelet/pods/ea19cb4b-61ad-4c87-989b-deff5d5bdc6b/volumes/kubernetes.io~projected/kube-api-access-xl5mv
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/5c4b00f85f8eabbb02aa1371b61b2f9dfb768c9e262b3f7f829709d9b81c0220/rootfs
tmpfs           2.8G   12K  2.8G   1% /var/lib/kubelet/pods/fdb06b04-7553-4138-a284-9b686eb31a51/volumes/kubernetes.io~projected/kube-api-access-62ltc
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/1d18ff34e072aad4a5707198da553084e78ba771c1da4329c046b8cf24cb9410/shm
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/1d18ff34e072aad4a5707198da553084e78ba771c1da4329c046b8cf24cb9410/rootfs
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/40bb5eeeee15c8411cd7cc37873af9e15afabd65e598a303dd78bd28122d78a6/rootfs
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/50a7cba746826aac37783cb9f6fc04d5862cef28c1d1b9d9e1aa676c77237817/shm
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/50a7cba746826aac37783cb9f6fc04d5862cef28c1d1b9d9e1aa676c77237817/rootfs
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/8744c1c3978b73683df0aa6cf9fa6275c5cd13e163e896c7cecc0a98d322c8b0/rootfs
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/368474453dcc9ebfb6ab4fda67de1338187a5b33cb1eafbdc318e6b1e49a5a72/shm
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/368474453dcc9ebfb6ab4fda67de1338187a5b33cb1eafbdc318e6b1e49a5a72/rootfs
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/65ac8c1b73410d19cdb0000a0830a3e6904664d82b77731e01e235280477cc72/rootfs
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/77492db2007049891d0a86d0640cae905e09d99fa6cd826815dad1f914b6fde1/shm
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/77492db2007049891d0a86d0640cae905e09d99fa6cd826815dad1f914b6fde1/rootfs
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/51a8ae988edb20a2398e6970169a891dba006ecb401455eaa7f44067857f833d/rootfs
tmpfs            13G   12K   13G   1% /var/lib/kubelet/pods/ac753a3b-8f5e-4450-9ef6-1dea15b2d117/volumes/kubernetes.io~projected/kube-api-access-d422f
/dev/sdb        9.8G  1.8M  9.8G   1% /var/lib/kubelet/plugins/kubernetes.io/csi/pv/pvc-ec8a4fc6-89a7-49dd-b17f-69d0d979fd81/globalmount
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/0687c9703cd4672e23a4728d7c6874e4ce2efb9628af2b6921ed7a8f130e61b8/shm
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/0687c9703cd4672e23a4728d7c6874e4ce2efb9628af2b6921ed7a8f130e61b8/rootfs
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/a07669c2a630394914ab04a5c2aedc963a576d68cfc1416a463df31489df9442/rootfs
tmpfs           733M   12K  733M   1% /var/lib/kubelet/pods/5e9b7f50-855f-4b02-b507-fb6b0cf8dae6/volumes/kubernetes.io~projected/kube-api-access-jrct7
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/86a4b3cc53bb298846fe05d19fdf7c155cacc7264a4f742ea2a65fcf87c5a44e/shm
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/86a4b3cc53bb298846fe05d19fdf7c155cacc7264a4f742ea2a65fcf87c5a44e/rootfs
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/dee212bd65659ddd900e697e85d7aa2ad8e7f0283ded5caa12d200bd0f77358a/rootfs
tmpfs            13G   12K   13G   1% /var/lib/kubelet/pods/6c745e45-281f-4782-9cdf-85093fe6a449/volumes/kubernetes.io~projected/kube-api-access-m59fx
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/d8a06f5d73733065fe2d64bbaa0ec0c2f32e10b91e5c96887d84d241c68b4ff5/rootfs
overlay          97G   82G   16G  84% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/c144a124184543f5e3b9021a716c3af0dee2d6df993b7388ea9f2a20cd32dc51/rootfs
```

执行这个命令

https://stackoverflow.com/questions/65357072/kubernetes-increase-the-size-of-overlayfs-containerd-runtime-volumes-in-k3s

```
$ crictl rmi --prune
```

降到18%占用。

```
root@aks-agentpool-20049210-vmss000005:/# df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            7.8G     0  7.8G   0% /dev
tmpfs           1.6G  2.3M  1.6G   1% /run
/dev/sdc1        97G   18G   80G  18% /
tmpfs           7.9G     0  7.9G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           7.9G     0  7.9G   0% /sys/fs/cgroup
/dev/sdc15      105M  4.4M  100M   5% /boot/efi
/dev/sda1        32G   36K   30G   1% /mnt
tmpfs           250M  8.0K  250M   1% /var/lib/kubelet/pods/b84f3980-b1fb-4f41-abe6-db1400631341/volumes/kubernetes.io~projected/azure-ip-masq-agent-config-volume
tmpfs           1.8G     0  1.8G   0% /var/lib/kubelet/pods/5f04913f-054b-462a-a823-f0d27e008298/volumes/kubernetes.io~secret/ama-logs-adx-secret
tmpfs           1.8G   12K  1.8G   1% /var/lib/kubelet/pods/5f04913f-054b-462a-a823-f0d27e008298/volumes/kubernetes.io~secret/ama-logs-secret
tmpfs           1.8G   12K  1.8G   1% /var/lib/kubelet/pods/5f04913f-054b-462a-a823-f0d27e008298/volumes/kubernetes.io~projected/kube-api-access-7684h
tmpfs           100M   12K  100M   1% /var/lib/kubelet/pods/17240872-3122-42f4-a56a-b872df4eddf2/volumes/kubernetes.io~projected/kube-api-access-kgclg
tmpfs           600M   12K  600M   1% /var/lib/kubelet/pods/bce507b0-a21a-4f0e-b3e5-a49c558853ed/volumes/kubernetes.io~projected/kube-api-access-7rfhl
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/4f954e8efc64fbf0593de3596eeeff26082bba780d6f30c8bff8446966c05c21/shm
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/4f954e8efc64fbf0593de3596eeeff26082bba780d6f30c8bff8446966c05c21/rootfs
tmpfs            13G   12K   13G   1% /var/lib/kubelet/pods/eecab056-9a6f-4034-85da-8b87de20d57f/volumes/kubernetes.io~projected/kube-api-access-tzft6
tmpfs           250M   12K  250M   1% /var/lib/kubelet/pods/b84f3980-b1fb-4f41-abe6-db1400631341/volumes/kubernetes.io~projected/kube-api-access-t9nqm
tmpfs           512M   12K  512M   1% /var/lib/kubelet/pods/c3a586b5-2d0a-46b9-a2de-5c80ee207d1c/volumes/kubernetes.io~projected/kube-api-access-dnx4s
tmpfs           400M   12K  400M   1% /var/lib/kubelet/pods/953eba34-e28e-4559-963e-b696a47584c5/volumes/kubernetes.io~projected/kube-api-access-wgx2h
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/6170df6f6b0a34b00591c5da1b5968c0f6448da359599ff713a6b2aa011babb2/rootfs
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/1a64b937e7f087bfc75597da2207371e6666acac31143c11e29a5f999a3d039a/shm
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/1a64b937e7f087bfc75597da2207371e6666acac31143c11e29a5f999a3d039a/rootfs
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/cab535782b3b2bc4fca5c53db112edbc3d2d40890a794f1e9b127a33ed790066/rootfs
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/9c55bdb99a6fc5d1995ca3814277cd744f2da850a803fa5836fdc39d9dd1a90b/rootfs
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/73280cf814eae2ef02f01b326ad22534033213ce32df00a943b114daad543e8d/rootfs
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/70011ae9291b5c1efdfb46e2f0fc05ae88822a13e12ddb76cb48b5b048433d32/rootfs
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/84ac43c7001e3fc7c9e61e22b8d8544f229ab53731640a58a0e5dec15af11357/rootfs
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/a1a067400c75bffe839418c1fe254900834452727118d191fd5db00e1b069db2/shm
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/a1a067400c75bffe839418c1fe254900834452727118d191fd5db00e1b069db2/rootfs
tmpfs           954M   12K  954M   1% /var/lib/kubelet/pods/ea19cb4b-61ad-4c87-989b-deff5d5bdc6b/volumes/kubernetes.io~projected/kube-api-access-xl5mv
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/5c4b00f85f8eabbb02aa1371b61b2f9dfb768c9e262b3f7f829709d9b81c0220/rootfs
tmpfs           2.8G   12K  2.8G   1% /var/lib/kubelet/pods/fdb06b04-7553-4138-a284-9b686eb31a51/volumes/kubernetes.io~projected/kube-api-access-62ltc
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/1d18ff34e072aad4a5707198da553084e78ba771c1da4329c046b8cf24cb9410/shm
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/1d18ff34e072aad4a5707198da553084e78ba771c1da4329c046b8cf24cb9410/rootfs
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/40bb5eeeee15c8411cd7cc37873af9e15afabd65e598a303dd78bd28122d78a6/rootfs
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/07d20e82cf13053ecfbaa501b725ebea407af5275c435d9d0d49417aa0ef662b/shm
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/07d20e82cf13053ecfbaa501b725ebea407af5275c435d9d0d49417aa0ef662b/rootfs
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/0dab0ae65689a00431315e79f21c801f2762e760c706f648d992e3825beecd49/shm
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/0dab0ae65689a00431315e79f21c801f2762e760c706f648d992e3825beecd49/rootfs
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/a7ac04955e540d5f98376ababbfec01c839d588f2b570924b114d00fbb4e8f44/rootfs
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/f6bf4ffe3c15a524b31242b98f78b3c80ab424f30907c8859ee451d944db2a39/rootfs
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/459b1c21f40200112100398c93c01de62bd9a800370e38628bf8ef01182708df/rootfs
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/50a7cba746826aac37783cb9f6fc04d5862cef28c1d1b9d9e1aa676c77237817/shm
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/50a7cba746826aac37783cb9f6fc04d5862cef28c1d1b9d9e1aa676c77237817/rootfs
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/8744c1c3978b73683df0aa6cf9fa6275c5cd13e163e896c7cecc0a98d322c8b0/rootfs
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/368474453dcc9ebfb6ab4fda67de1338187a5b33cb1eafbdc318e6b1e49a5a72/shm
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/368474453dcc9ebfb6ab4fda67de1338187a5b33cb1eafbdc318e6b1e49a5a72/rootfs
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/65ac8c1b73410d19cdb0000a0830a3e6904664d82b77731e01e235280477cc72/rootfs
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/77492db2007049891d0a86d0640cae905e09d99fa6cd826815dad1f914b6fde1/shm
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/77492db2007049891d0a86d0640cae905e09d99fa6cd826815dad1f914b6fde1/rootfs
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/51a8ae988edb20a2398e6970169a891dba006ecb401455eaa7f44067857f833d/rootfs
tmpfs            13G   12K   13G   1% /var/lib/kubelet/pods/ac753a3b-8f5e-4450-9ef6-1dea15b2d117/volumes/kubernetes.io~projected/kube-api-access-d422f
/dev/sdb        9.8G  1.8M  9.8G   1% /var/lib/kubelet/plugins/kubernetes.io/csi/pv/pvc-ec8a4fc6-89a7-49dd-b17f-69d0d979fd81/globalmount
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/0687c9703cd4672e23a4728d7c6874e4ce2efb9628af2b6921ed7a8f130e61b8/shm
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/0687c9703cd4672e23a4728d7c6874e4ce2efb9628af2b6921ed7a8f130e61b8/rootfs
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/a07669c2a630394914ab04a5c2aedc963a576d68cfc1416a463df31489df9442/rootfs
tmpfs           733M   12K  733M   1% /var/lib/kubelet/pods/5e9b7f50-855f-4b02-b507-fb6b0cf8dae6/volumes/kubernetes.io~projected/kube-api-access-jrct7
shm              64M     0   64M   0% /run/containerd/io.containerd.grpc.v1.cri/sandboxes/86a4b3cc53bb298846fe05d19fdf7c155cacc7264a4f742ea2a65fcf87c5a44e/shm
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/86a4b3cc53bb298846fe05d19fdf7c155cacc7264a4f742ea2a65fcf87c5a44e/rootfs
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/dee212bd65659ddd900e697e85d7aa2ad8e7f0283ded5caa12d200bd0f77358a/rootfs
tmpfs            13G   12K   13G   1% /var/lib/kubelet/pods/520b0714-cebc-460a-8650-2c2379fad60a/volumes/kubernetes.io~projected/kube-api-access-5hrtj
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/547b109e2fe2f6a2b54e4648c38760e4718368b88a8c19a46b574cad2c522d01/rootfs
overlay          97G   18G   80G  18% /run/containerd/io.containerd.runtime.v1.linux/k8s.io/5d6e2baf4d8732309e2d59c105bb6aa1b20ae347a3c3d050b1118b7eeb6269a9/rootfs
```

## 创建cronjob定期清理

```
0 2 * * *  /usr/local/bin/crictl rmi --prune
```
