﻿Owin Packages

Install-Package Microsoft.Owin.SelfHost -Version 4.0.0
Install-Package Microsoft.AspNet.WebApi.Owin -Version 5.2.6
Install-Package Microsoft.Owin.StaticFiles -Version 4.0.0

-----------------------------------------------------------

ZooKeeper 
downloaded from Apache mirrors
http://mirrors.hust.edu.cn/apache/zookeeper/zookeeper-3.4.12/

add zoo.cfg in the conf folder,which is as follows and change dataDir with your


# The number of milliseconds of each tick
tickTime=2000
# The number of ticks that the initial 
# synchronization phase can take
initLimit=10
# The number of ticks that can pass between 
# sending a request and getting an acknowledgement
syncLimit=5
# the directory where the snapshot is stored.
# do not use /tmp for storage, /tmp here is just 
# example sakes.
dataDir=d:\\zookeeper\\data
#dataLogDir=d:\\zookeeper\\log
# the port at which the clients will connect
clientPort=2181
#
# Be sure to read the maintenance section of the 
# administrator guide before turning on autopurge.
#
# http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance
#
# The number of snapshots to retain in dataDir
#autopurge.snapRetainCount=3
# Purge task interval in hours
# Set to "0" to disable auto purge feature
#autopurge.purgeInterval=1


run bin/zkServer.cmd to start zookeeper
Please confirm whether the Java runtime environment is installed
--------------------------------------------------------------------

run ruiji.cmd.exe 

You can see the following information

Server Start At http://x.x.x.x:x
proxy x.x.x.x:37002 ready to startup!
try connect to zookeeper server : x.x.x.x:2181
zookeeper server connected!

Now the service startup is complete!

Notice 
The RuiJi.cmd.exe have to run as an administrator!

--------------------------------------------------------------------

RuiJi.Cmd.exe Help

