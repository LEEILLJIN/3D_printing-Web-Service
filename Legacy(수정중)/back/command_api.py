import os

class HandlingCommandLine:
    print("Enter HandlingCommandLine Class")

    def StlToGcode(self, name):
        print("Enter HandlingCommandLine.StlToGcode")
        print("You have sent ",name)
        stream = os.popen('ls -l')
        output = stream.read()
        print(output)


    def CheckPrusaInstalled(self):
        #Prusa Slicer가 설치되었는지 확인한다. (미구현)
        #간단하게 경로에 설치가 되어져 있는지 확인하면 되지 않을까?
        print("Enter HandlingCommandLine.CheckPrusaInstalled")
        path = "/usr/local/bin/"    # 여기에 PrusaSclier 기본설치경로 지정
        isExist = os.path.exists(path)
        print(isExist)  # 경로가 있으면 True, 없으면 False 반환
        

    def PrusaInstall(self):
        #Prusa Slicer를 설치한다. (미구현)
        #CheckPrusaInstalled에서 false가 나오면 PrusaInstall함수를 작동시킨다.
        print("Enter HandlingCommandLine.PrusaInstall")

    def IsPrusaNewVersionAvilable(self):
        #Prusa Slicer의 새로운 버전이 나왔는지 확인하는 함수이다.(미구현)
        print("Enter HandlingCommandLine.IsPrusaNewVersionAvilable")


# python class 조종방법
print("Enter the main")
test = HandlingCommandLine()    # 객체 생성
test.StlToGcode("adsa") # 객체로 명령어 전달


