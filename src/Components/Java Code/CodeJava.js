
                         //  Programs Starts


 export const prime=
`import java.util.Scanner;

public class P1{
    public static void main(String[] args) {


        int c=0;
        System.out.println("Please Enter the number");
        Scanner sc =new Scanner(System.in);
        int n=sc.nextInt();
        int i;
        for ( i = 1; i <100 ; i++) {
            if(i%n==0){
                c++;
            }
            if(c<=2){
                System.out.println("Prime Number   =   "+n);
            }

            sc.close();
        }

    }

}`;

 export const merge=`import java.util.Scanner;

   public class P1{
       public static void main(String[] args) {
   
   
         
           System.out.println("Please Enter the number");
           Scanner sc =new Scanner(System.in);
              int a =sc.nextInt();
              int b=sc.nextInt();
              int c=0,m=b,p;
              while(m>0){
                  c++;
                  m=m/10;
              } 
    p=a*(int)Math.pow(10,c)+b;
   System.out.println("Merging two Number"+p);
   
   
   
           sc.close();
       }
   
   }`;
   
 export const Method=`import java.util.Scanner;

  public class Program{
      public static void main(String[] args) {
      Program obj=new Program();
      System.out.println("Please Enter the number");
      Scanner sc =new Scanner(System.in);
      int a1=sc.nextInt();
      int b1=sc.nextInt();
  
      obj.merge(a1,b1);
      sc.close();
      
  }
  
  public void merge(int a ,int b){
      
      
      int c=0,m=b,p;
      while(m>0){
          c++;
          m=m/10;
      } 
      p=a*(int)Math.pow(10,c)+b;
      System.out.println("Merging two Number  = "+p);
      
      
  
  
      }
  
  } `;

 export const Buffer=`import java.io.*;


  class Program{
      public static void main(String[] args) throws  IOException{
      char ch;
      BufferedReader br=new BufferedReader( new InputStreamReader(System.in));
      System.out.println("Please Enter the Number ");
      ch=(char)br.read();
      switch(ch){
          case '1':
          System.out.println("Monday");
          break;
          case '2':
          System.out.println("Tuesday");
          break;
          case '3':
          System.out.println("Wednesday");
          break;
          case '4':
          System.out.println("Thursday");
          break;
          case '5':
          System.out.println("Friday");
          break;
          case '6':
          System.out.println("Staurday");
          break;
          case '7':
          System.out.println("Sunday");
          break;
          default:
          System.out.println("Invalid Number");
         
      }
      
      }
  
  }`;


                        // Programs Ends